import React from 'react';
import {Button} from 'reactstrap';
import "./App.css";


 export default class App extends React.Component {
 constructor(props){
super(props);
this.state={
  rows:[]
}
 this.addRow=this.addRow.bind(this);
 }
  addRow(){
  var rows=this.state.rows;
  rows.push(<input></input>);
  this.setState({rows:rows})
    
  }
 
  render(){
  return (
    <div className="App" >
      <table contentEditable ="true" id="myTable" style={{border:" 2px solid"}} >
      <tr>
        
    <th>s.no</th>
    <th>name</th>
    <th>mark 1</th>
    <th>mark2</th>
    <th>mark 3</th>
    <th>total</th>
  <th>rank</th>
  

  </tr>
  <tr>
    
    <td>1</td>
    <td>dinesh</td>
    <td>90</td>
    <td>95</td>
    <td>90</td>
  <td>275</td>
  <td>1</td>
  </tr>
  <tr>
    
    <td>2</td>
    <td>hari</td>
    <td>90</td>
    <td>95</td>
    <td>90</td>
  <td>275</td>
  <td>2</td>
  </tr>
  <tr>
  <td>3</td>
    <td>tamil</td>
    <td>90</td>
    <td>95</td>
    <td>90</td>
  <td>275</td>
  <td>3</td>
  </tr>
  {this.state.rows.map((r)=>(
    <tr>
      
      <td>{r}</td>
      <td>{r}</td>
      <td>{r}</td>
      <td>{r}</td>
      <td>{r}</td>
      <td>{r}</td>
      <td>{r}</td>
      
    </tr>
  ))}
      
      </table>
      <Button style={{margin:"50px"}} color="primary" onClick={this.addRow}>Add</Button>
      
      <Button color="primary">save</Button>
      
    </div>
  );
}
 }