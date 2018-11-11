import React, { Component } from 'react';
import uid from 'uuid';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

const fieldsName = [
  {
    key: 'UserId',
    description: 'User Id'
  },
  {
    key: 'UserName',
    description: 'User Name'
  },
  {
    key: 'DateRegistered',
    description: 'Date registered'
  },
  {
    key: 'RoleName',
    description: 'Role Name'
  },
  {
    key: 'Status',
    description: 'Status'
  },
];
const responseByAPI = [
  {
    UserId: 1,
    UserName: 'Huynh Cong Tru',
    DateRegistered: new Date(),
    RoleName: 'Administrator',
    Status: 'Active',
  },
  {
    UserId: 2,
    UserName: 'Nguyen Van Thi',
    DateRegistered: new Date(),
    RoleName: 'Moderator',
    Status: 'InActive',
  },
  {
    UserId: 3,
    UserName: 'Phan Quoc Cuong',
    DateRegistered: new Date(),
    RoleName: 'Super Moderator',
    Status: 'Pending',
  },
];
const response = {
  initial_data: [
    {
       "UserId": 1,
       "UserName": "Huynh Cong Tru",
       "DateRegistered": "2018-11-11T18:01:53.024Z",
       "RoleName": "Administrator",
       "Status": "Active"
    },
    {
       "UserId": 2,
       "UserName": "Nguyen Van Thi",
       "DateRegistered": "2018-11-11T18:01:53.024Z",
       "RoleName": "Moderator",
       "Status": "InActive"
    },
    {
       "UserId": 3,
       "UserName": "Phan Quoc Cuong",
       "DateRegistered": "2018-11-11T18:01:53.024Z",
       "RoleName": "Super Moderator",
       "Status": "Pending"
    },
    {
      "UserId": 4,
      "UserName": "Huynh Cong Tru",
      "DateRegistered": "2018-11-11T18:01:53.024Z",
      "RoleName": "Administrator",
      "Status": "Active"
   },
   {
      "UserId": 5,
      "UserName": "Nguyen Van Thi",
      "DateRegistered": "2018-11-11T18:01:53.024Z",
      "RoleName": "Moderator",
      "Status": "InActive"
   },
   {
      "UserId": 6,
      "UserName": "Phan Quoc Cuong",
      "DateRegistered": "2018-11-11T18:01:53.024Z",
      "RoleName": "Super Moderator",
      "Status": "Pending"
   }
 ]
};
class Test extends Component {

  printFieldsHeadOfTable = (fields) => {
    return (
      <thead>
        <tr>
          {
            fields.map((field, index) => {
              return (
                <th key={uid()}>{field.description}</th>
              )
            })
          }
        </tr>
      </thead>
    );
  }
  printRowsInTable = (fields, data) => {
    return (
      <tbody>
        {
          data.map((row, index) => {
            const field = fields[index].key;
            console.log(field);
            return (
              <tr key={index}>
                <td align="center">{row[`UserId`]}</td>
                <td>{row.UserName}</td>
                <td>{row.DateRegistered.toLocaleDateString()}</td>
                <td>{row.RoleName}</td>
                <td>
                  <Badge color={row.Status === 'Active' ? 'success' : (row.Status === 'InActive' ? 'danger' : 'warning')}>{row.Status}</Badge>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    );
  }
  render() {
    const data = response.initial_data;
    const columns = Object.keys(response.initial_data[0]).map((key, id) => {
      return {
        Header: key,
        accessor: key
      }
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Bordered Table
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={5}
                  className='responsive bordered'
                />
                <br />
                <Table responsive bordered>
                  {this.printFieldsHeadOfTable(fieldsName)}
                  {this.printRowsInTable(fieldsName, responseByAPI)}
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Test;