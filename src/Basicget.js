import React, { Component } from 'react'
import Coding from './Coding.png';
import Bad from './Bad.js';
import Img from './Img.js'; 


class Basicget extends Component {

  constructor(props){
    super(props);
    this.state={
      basic:[],
      isLoaded:false
    }
    this.getBasic = this.getBasic.bind(this);
  }

  componentWillMount(){
    this.getBasic();
  }

  getBasic(){
    return fetch(`/api/basic`,{
       method: 'get',
       headers: {
         'Authorization': 'Basic '+btoa('codingsastra:codingsastra'),
         'Content-Type': 'application/x-www-form-urlencoded'
       }})
    .then(function(response){
      response.json().then(function(data) {
        this.setState({basic:data,isLoaded:true})
      }.bind(this))
    }.bind(this))
    .catch(function(error){
      console.log("error")
      return "[]";
    });
  };

  render(){

    if(this.state.isLoaded) {
      return(
          <div>
           <Img />
            <Bad />
            <div className="page-header">
              <h3>Application form</h3>
              <a href="/basic" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-plus"></span> New registeration</a>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th><input type="checkbox" id="checkall" /></th>
                  <th>Reason of enqire</th>
                  <th>Student name</th>
                  <th>Parent name</th>
                  <th>ParentNumber</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.basic.map((basic, index) => (
                    <BasicRow _id={basic._id}
                                ReasonofEnquire={basic.ReasonofEnquire}
                                StudentName={basic.StudentName}
                                ParentName={basic.ParentName}
                                />
                ))}
              </tbody>
            </table>
            <div className="clearfix"></div>
            
          </div>
      )
    }
    else {
      return(
        <div>Loading..</div>
      )
    }
  }

}

const BasicRow=(props) =>
      <tr key={props._id}>
        <td><input type="checkbox" className="checkthis" /></td>
        <td key={props.ReasonofEnquire}>{props.ReasonofEnquire}</td>
        <td key={props.StudentName}>{props.StudentName}</td>
        <td key={props.ParentName}>{props.ParentName}</td>
        <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
        <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>
      </tr>


export default Basicget
