/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactTable from "react-table";
import { translate } from 'react-i18next';
import key from '../../../i18n/translationKeys';
import { Card, CardBody, CardHeader, Col, Row, Badge } from "reactstrap";
import { RingLoader } from 'react-spinners';
import LoadingOverlay from 'react-loading-overlay';
import { toastr } from 'react-redux-toastr';
import { ConfirmModal } from '../../../components/modals/confirmModal';
import { getAllRoles, changeStatusRole, deleteRole } from '../../../actions/role';
import { commonConstant } from '../../../contants/common';
import { isNullOrEmptyObject, removeItemFromItems } from '../../../utilities/validate';

var _handleItem = null;
var _currentAtion = null;
var _renderNumber = 0;
class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowStatusConfirmModal: false,
            isShowDeleteConfirmModal: false,
        };
    }

    componentDidMount() {
        this.props.getAllRoles();
    }
    componentWillReceiveProps(nextProps) {
        let { t, roles, deleteItem, changeStatus } = nextProps;
        if (deleteItem && deleteItem.isLoading) {
            _currentAtion = commonConstant.DELETE;
            return;
        }
        if (changeStatus && changeStatus.isLoading) {
            _currentAtion = commonConstant.CHANGE_STATUS;
            return;
        }
        if (roles.responseData && roles.responseData.data && roles.responseData.data.length > 0) {
            let currentList = roles.responseData.data;
            if (_currentAtion === commonConstant.DELETE && deleteItem && !deleteItem.isLoading && !isNullOrEmptyObject(deleteItem.responseData)) {
                roles.responseData.data = removeItemFromItems(_handleItem, currentList);
                deleteItem.isError ? toastr.error(t(key.message.deleteInfo), t(key.message.deleteErrorInfo)) :
                    toastr.success(t(key.message.deleteInfo), t(key.message.deleteSuccessInfo));
            }

            else if (_currentAtion === commonConstant.CHANGE_STATUS && changeStatus && !isNullOrEmptyObject(changeStatus.responseData) && !changeStatus.isLoading) {
                changeStatus.isError ? toastr.error(t(key.message.switchStatusInfo), t(key.message.switchStatusErrorInfo)) :
                    toastr.success(t(key.message.switchStatusInfo), t(key.message.switchStatusSuccessInfo));
            }
        }
    }
    openModalChangeStatus = (item) => {
        _handleItem = item;
        this.handleToggleModal(commonConstant.CHANGE_STATUS, null);
    }
    handleChangeStatus = () => {
        if (_handleItem && _handleItem.Id) {
            this.props.changeStatusRole(_handleItem.Id);
        }
    }
    openModalDelete = (item) => {
        _handleItem = item;
        this.handleToggleModal(commonConstant.DELETE, null);
    }
    handleDelete = () => {
        if (_handleItem && _handleItem.RoleName) {
            this.props.deleteRole(_handleItem.RoleName);
        }
    }
    handleToggleModal = (nameFn, isSelected = false) => {
        if (isSelected && nameFn === commonConstant.CHANGE_STATUS) {
            this.handleChangeStatus();
        }
        else if (isSelected && nameFn === commonConstant.DELETE) {
            this.handleDelete();
        }
        this.setState({
            isShowStatusConfirmModal: nameFn === commonConstant.CHANGE_STATUS ? !this.state.isShowStatusConfirmModal : false,
            isShowDeleteConfirmModal: nameFn === commonConstant.DELETE ? !this.state.isShowDeleteConfirmModal : false,
        });
    }
    handleEdit = (item) => {
        console.log('handleEdit', item);
    }
    renderMainContent(data, t, classAnimated, isLoadingDelete) {
        let columns = Object.keys(data[0]).map((key, id) => {
            return {
                Header: key,
                headerClassName: 'header-table',
                accessor: key,
                show: (key === 'Status') ? false : true,
                minWidth: id === 0 ? 150 : 100,
                className: id === 0 ? 'text-center' : '',
            };
        });
        columns.unshift({
            Header: '#',
            headerClassName: 'header-table',
            accessor: 'identifierNumber',
            Cell: (row) => { return <span>{row.index + 1}</span> },
            minWidth: 20,
            className: 'text-center',
        });
        columns.push({
            Header: 'Status',
            headerClassName: 'header-table',
            accessor: 'status',
            Cell: row => {
                const titleStatus = (row.original.Status === 'Active' || row.original.Status === 1) ? key.message.active :
                    (row.original.Status === 'InActive' || row.original.Status === 0) ? key.message.inActive : key.message.deleted;
                const colorStatus = (row.original.Status === 'Active' || row.original.Status === 1) ? 'success' :
                    (row.original.Status === 'InActive' || row.original.Status === 0) ? 'danger' : 'secondary';
                return (
                    <Badge className="label-status" onClick={() => this.openModalChangeStatus(row.original)}
                        color={colorStatus}>
                        {t(titleStatus)}
                    </Badge>
                )
            },
            width: 80,
            className: 'text-center handle-pointer',
        });
        columns.push({
            Header: 'Update',
            headerClassName: 'header-table',
            accessor: 'update',
            Cell: row => (
                <>
                    <i onClick={() => this.handleEdit(row.original)} className="handle-pointer fa fa-edit fa-lg"></i> &nbsp;
        <i onClick={() => this.openModalDelete(row.original)} className="handle-pointer fa fa-trash-o fa-lg"></i>
                </>
            ),
            width: 80,
            className: 'text-center',
        });
        const propsOfTable = {
            data: data,
            columns: columns,
            defaultPageSize: 10,
        }
        return (

            <div className={classAnimated}>
                <LoadingOverlay active={isLoadingDelete} spinner text='Processing...' className="overlayFullScreen" />
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-roles text-primary" /> {t(key.message.rolesList)}
                            </CardHeader>
                            <CardBody>
                                <ReactTable {...propsOfTable} />
                                <ConfirmModal isOpenModal={this.state.isShowStatusConfirmModal}
                                    toggleModal={() => this.handleToggleModal(commonConstant.CHANGE_STATUS, false)}
                                    selectedYes={() => this.handleToggleModal(commonConstant.CHANGE_STATUS, true)}
                                    className="warning" sizeModal="md" backdropModal="static"
                                    headerTitle={t(key.message.infoTitleConfirmModal)}
                                    bodyContent={t(key.message.switchStatusConfirmModal)}
                                    textBtnYes={t(key.button.btnOk)}
                                    textBtnNo={t(key.button.btnCancel)}
                                />
                                <ConfirmModal isOpenModal={this.state.isShowDeleteConfirmModal}
                                    toggleModal={() => this.handleToggleModal(commonConstant.DELETE, false)}
                                    selectedYes={() => this.handleToggleModal(commonConstant.DELETE, true)}
                                    className="danger" sizeModal="md" backdropModal="static"
                                    headerTitle={t(key.message.infoTitleConfirmModal)}
                                    bodyContent={t(key.message.deleteConfirmModal)}
                                    textBtnYes={t(key.button.btnOk)}
                                    textBtnNo={t(key.button.btnCancel)}
                                />
                                {/* Option className modal: primary, info, danger, warning,success, 
                  Size modal: sm, md, lg */}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
    render() {
        console.log('_renderNumber', _renderNumber++);
        const { t, changeStatus, deleteItem, roles } = this.props;

        const classAnimated = 'animated fadeIn';
        if (!roles) return;
        if (roles.isLoading) {
            return <RingLoader sizeUnit={"px"} size={100} color={'#86E7D4'} loading={roles.isLoading} />
        } else if (roles.isError) {
            return <div className={classAnimated}>{t(key.message.errorGetAllAPI)}</div>;
        } else {
            if (roles.responseData && roles.responseData.data && roles.responseData.data.length > 0) {
                return this.renderMainContent(roles.responseData.data, t, classAnimated, deleteItem.isLoading);
            } else {
                return <div className={classAnimated}><Row><Col xs="12" lg="12">{t(key.message.noDataFound)}</Col></Row></div>;
            }
        }
    }
}
const mapStateToProps = state => ({
    roles: state.getAllRolesReducer,
    changeStatus: state.changeStatusRoleReducer,
    deleteItem: state.deleteRoleReducer,
});

const mapDispatchToProps = {
    getAllRoles,
    changeStatusRole,
    deleteRole,
};

export default translate()(connect(mapStateToProps, mapDispatchToProps)(Role));