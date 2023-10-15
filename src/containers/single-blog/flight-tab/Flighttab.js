import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row,  } from 'reactstrap';
import classnames from 'classnames';
import './Flighttab.css'
import { useParams } from 'react-router-dom';


const Flighttab = (props) => {
  const [activeTab, setActiveTab] = useState('1');


 const {tid}= useParams()

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
 

  return (
    <>
    {!tid && <div>
      <h3 className="mt-3  ">Flights</h3>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           Flight 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Flight 2 
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row className='pt-3'>
            {/* <Col sm="6">
              <Card body>
                <CardTitle>Samples</CardTitle>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sint alias velit eligendi vero tempore aut eius sequi. Minima vel atque maxime?.</CardText>
               
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Matces</CardTitle>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sint alias velit eligendi vero tempore aut eius .</CardText>
              </Card>
            </Col> */}

<div className='row'>
                    <div className='col-md-6'>
                    <div className="row">
                  <div className='col-12'>
                  <h6 className="inline-block" >sample:
                  </h6>
                  </div>
                  <br />
                  <div className="col-lg-12 mb-3 d-flex flex-column">
                        <span className='mt-2 Sample-flight'>
                         Sample 1
                        </span>
                        <span className='mt-2 Sample-flight'>
                         Sample 2
                        </span> 
                         <span className='mt-2 Sample-flight'>
                         Sample 3
                        </span>
                  </div>
                </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="row">
                      <div className='col-12'>
                      <h6 className="" >sample 2:
                  </h6>
                      </div>
                  
                  <br />
                  <div className="col-lg-12 mb-3 d-flex flex-column">
                        <span className='mt-2 match-flight'>
                         Sample 1 vs Sample 2
                        </span>
                        <span className='mt-2 match-flight'>
                         Sample 2 vs Sample 3
                        </span> 
                         <span className='mt-2 match-flight'>
                         Sample 3 vs Sample 1
                        </span>
                  </div>
                </div>
                    </div>

                    
                </div>
          </Row>
        </TabPane>


        <TabPane tabId="2">
          <Row className='pt-3'>
          <div className='row'>
                    <div className='col-md-6'>
                    <div className="row">
                  <div className='col-12'>
                  <h6 className="inline-block" >Samples:
                  </h6>
                  </div>
                  <br />
                  <div className="col-lg-12 mb-3 d-flex flex-column">
                        <span className='mt-2 Sample-flight'>
                         Lorem ipsum 1
                        </span>
                        <span className='mt-2 Sample-flight'>
                        Lorem ipsum 2
                        </span> 
                         <span className='mt-2 Sample-flight'>
                         Lorem ipsum 3
                        </span>
                  </div>
                </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="row">
                      <div className='col-12'>
                      <h6 className="" >Matches:
                  </h6>
                      </div>
                  
                  <br />
                  <div className="col-lg-12 mb-3 d-flex flex-column">
                        <span className='mt-2 match-flight'>
                        Lorem ipsum 1 vs Lorem ipsum 2
                        </span>
                        <span className='mt-2 match-flight'>
                        Lorem ipsum 2 vs Lorem ipsum 3
                        </span> 
                         <span className='mt-2 match-flight'>
                         Lorem ipsum 3 vs Lorem ipsum 1
                        </span>
                  </div>
                </div>
                    </div>

                    
                </div>
          </Row>
        </TabPane>
      </TabContent>
     
     
    </div>}
    </>
  );
}

export default Flighttab;