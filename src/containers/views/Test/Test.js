/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import uid from "uuid";
import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  Card, CardBody, CardHeader, Col, Row, Badge,
} from "reactstrap";
import { translate } from 'react-i18next';
import key from '../../../i18n/translationKeys';
import { formatDateTime } from '../../../utilities/format';
import { ConfirmModal } from '../../../components/modals/confirmModal';
import Config from '../../../config';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: green;
`;
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isShowStatusConfirmModal: false,
      isShowDeleteConfirmModal: false,
    };
  }
  callApiListItems = () => {
    const proxyUrl = Config.apiService.proxy;
    const targetUrl = Config.apiService.host + '/initial';
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(
        result => { this.setState({ isLoaded: true, items: result }); },
        error => { this.setState({ isLoaded: true, error }); }
      );
  };
  getAllUsers = () => {
    const proxyUrl = Config.apiService.proxy;
    const targetUrl = Config.apiService.host + Config.apiService.version + '/User/GetAll';
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(
        result => {
          if (result && result.data && result.data.Result) {
            this.setState({ isLoaded: true, items: result.data.Result });
          } else {
            console.log("Get data fail!");
          }
        },
        error => { this.setState({ isLoaded: true, error }); }
      );
  };
  componentDidMount() {
    // this.callApiListItems();
    this.getAllUsers();
  }
  handleChangeStatus = (item) => {
    this.handleToggleModal('changestatus');
  }
  handleDelete = (item) => {
    this.handleToggleModal('delete');
    console.log(item);
  }
  handleToggleModal = (nameFn) => {
    this.setState({
      isShowStatusConfirmModal: nameFn === 'changestatus' ? !this.state.isShowStatusConfirmModal : false,
      isShowDeleteConfirmModal: nameFn === 'delete' ? !this.state.isShowDeleteConfirmModal : false,
    });
  }
  handleEdit = (item) => {
    console.log(item);
  }
  render() {
    const { t } = this.props;
    const { error, isLoaded, items } = this.state;
    const classAnimated = 'animated fadeIn';
    if (error) {
      return <div className={classAnimated}>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <RingLoader className={override} sizeUnit={"px"}
        size={100} color={'#86E7D4'} loading={!isLoaded}
      />
    } else {
      const data = items;
      let columns = Object.keys(items[0]).map((key, id) => {
        return {
          Header: key,
          headerClassName: 'header-table',
          accessor: key,
          show: (key === 'Status' || key === 'Password' || key === 'FacebookId' || key === 'PictureUrl' || key === 'Location') ? false : true,
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
      // columns.push({
      //   Header: 'DateRegistered',
      //   headerClassName: 'header-table',
      //   accessor: 'DateRegistered',
      //   Cell: row => formatDateTime(row.original.DateRegistered),
      //   className: 'text-center',
      // });
      columns.push({
        Header: 'Status',
        headerClassName: 'header-table',
        accessor: 'status',
        Cell: row => {
          const titleStatus = (row.original.Status === 'Active' || row.original.Status === 1) ? 'Active' :
            (row.original.Status === 'InActive' || row.original.Status === 0) ? 'InActive' : 'Deleted';
          const colorStatus = (row.original.Status === 'Active' || row.original.Status === 1) ? 'success' :
            (row.original.Status === 'InActive' || row.original.Status === 0) ? 'danger' : 'secondary';
          return (
            <Badge className="label-status" onClick={() => this.handleChangeStatus(row.original)}
              color={colorStatus}>
              {titleStatus}
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
            <i onClick={() => this.handleDelete(row.original)} className="handle-pointer fa fa-trash-o fa-lg"></i>
          </>
        ),
        width: 80,
        className: 'text-center',
      });
      const propsOfTable = {
        data: data,
        columns: columns,
        defaultPageSize: 10,
        // filterable: true,
      }
      return (
        <div className={classAnimated}>
          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-users text-primary" /> {t(key.message.usersList)}
                </CardHeader>
                <CardBody>
                  <ReactTable {...propsOfTable} />
                  <ConfirmModal isOpenModal={this.state.isShowStatusConfirmModal}
                    toggleModal={this.handleToggleModal}
                    className="warning" sizeModal="md" backdropModal="static"
                    headerTitle={t(key.message.infoTitleConfirmModal)}
                    bodyContent={t(key.message.switchStatusConfirmModal)}
                    textBtnYes={t(key.button.btnOk)}
                    textBtnNo={t(key.button.btnCancel)}
                  />
                  <ConfirmModal isOpenModal={this.state.isShowDeleteConfirmModal}
                    toggleModal={this.handleToggleModal}
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
  }
}

export default translate()(Test);
