import React, { Component } from 'react';
import node from './node.png';
import one from './one.png';
import three from './three.jpg';
import {
  Carousel,Grid,Row,Col
} from 'react-bootstrap';



class Car extends Component {
  render() {
    return (

<Grid>
    <Row className="show-grid">
      <Col sm={12} md={9}><Carousel>
    <Carousel.Item>
      <img width={900} height={500} src={one}/>
     
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} src={node}/>
      
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} src={three}/>
      
    </Carousel.Item>
  </Carousel></Col>
      
    </Row>
    </Grid>

  );
  }
}

export default Car;