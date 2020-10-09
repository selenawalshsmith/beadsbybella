import React, {Component}  from 'react';
import "../styles/Collections.css";
import Grid from "./layout/Grid";
import axios from 'axios';
async function makeRequest(){
  const config = {
    method: 'post',
    url: 'http://localhost:5000/api/inventory/Collections/All'
  }
  let res = await axios(config)
  console.log(res.data.inventory);
  //return res.data.inventory;
}
class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //beadType: all
      beads: []
    }
  }
  /*
  async makeRequest(){
    const config = {
      method: 'post',
      url: 'http://localhost:5000/api/inventory/Collections/All'
    }
    let res = await axios(config)
    //console.log(res.data.inventory);
    return res.data.inventory;
  }
  */
  loadBeads = () => {
    /*
    fetch('http://localhost:5000/api/inventory/Collections/All')
      //.then(response => response.json())
      .then((response) => {
        console.log(response);
      }).catch(function (error){
        console.log(error);
    });
    */
    axios.post("http://localhost:5000/api/inventory/Collections/All")
      .then((res) => {
        const xyz = Object.create(res.data.inventory);
        console.log(xyz);
        for (const property in xyz) {
          //console.log(key + ": " + value);
          let b = property;
          console.dir(b);
        }

      }).catch(err => {console.log(err);});
  }
  componentDidMount (){
    /*
    axios.post("http://localhost:5000/api/inventory/Collections/All")
      .then((res) => {
        const xyz = Object.create(res.data.inventory);
        console.log(xyz);
        for (const property in xyz) {
          //console.log(key + ": " + value);
          let b = property;
          console.dir(b);
        }

      }).catch(err => {console.log(err);});
      */
      //const xzy = this.makeRequest();
      this.loadBeads();
      //console.log(xyz);
  }
  render (){
    return(
      <div className="collections-container">
        <div className="button-bar">
          <h2> cute button bar for diff types of beads</h2>
        </div>
        <div>
          <h2>Grid Function Component passed beadType.state</h2>
          <h3>Buttons onclick triggers beadType.state to
              change according to what bead category user wants to see
          </h3>
          <Grid cols={3}>
            {

            }
          </Grid>
        </div>
      </div>
    )
  }
}
export default Collections;
