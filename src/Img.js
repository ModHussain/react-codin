import React, { Component } from 'react';
import Coding from './Coding.png';
import {
  Image
} from 'react-bootstrap';



class Img extends Component {
  render() {
    return (
    	<div>

          <center>
          <Image src={Coding} responsive thumbnail width="450" height="120"/>
  </center>
  <hr/>
</div>
   );
  }
}

export default Img;