import React, { useEffect, useState } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import 'bootstrap/dist/css/bootstrap.css';
import AppBar from './Components/NavBar';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import TotalValue from './Components/TotalValue';
import AveLeaseRate from './Components/AveLeaseRate'; 

const publicSpreadsheetUrl =
  'https://docs.google.com/spreadsheets/d/1J7kQMOyQqGg1OYPu9b1qKzJ9Naq7vUppG93JUdSdOAQ/edit?usp=sharing';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function init() {
      Tabletop.init({
        key: publicSpreadsheetUrl,
        simpleSheet: true
      }).then(function(data, tabletop) {
        setItems(data);
      });
    }
    init();
  }, []);

  return (
    <div className='App'>
      <AppBar />
      <Container fluid={true}>
        <Row>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div>Total Value of Leases Outstanding</div>
              </CardHeader>
              <CardBody>
                <span>
                  $
                  <TotalValue items={items} />
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div>Average Lease Rate</div>
              </CardHeader>
              <CardBody>
                <span><AveLeaseRate items={items}/></span>
              </CardBody>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div>Total Revenue</div>
              </CardHeader>
              <CardBody>
                <span>$ <AveLeaseRate items={items}/> </span>
              </CardBody>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div>Total Revenue</div>
              </CardHeader>
              <CardBody>
                <span>$</span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
