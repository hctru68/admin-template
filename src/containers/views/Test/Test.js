/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import uid from "uuid";
import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  Card, CardBody, CardHeader, Col, Row,
  Badge, Pagination, PaginationItem, PaginationLink, Table
} from "reactstrap";
import { translate } from 'react-i18next';
import key from '../../../i18n/translationKeys';

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
      items: []
    };
  }
  callApiListItems = () => {
    let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let targetUrl = "http://limitless-dawn-42115.herokuapp.com/initial";
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };
  componentDidMount() {
    this.callApiListItems();
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
      const columns = Object.keys(items[0]).map((key, id) => {
        return { Header: key, accessor: key };
      });
      const propsOfTable = {
        data: data, columns: columns,
        defaultPageSize: 5, filterable: true,
      }
      return (
        <div className={classAnimated}>
          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-users text-primary" /> {t(key.message.gridTitle)}
                </CardHeader>
                <CardBody>
                  <ReactTable {...propsOfTable} />
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
