import React, {Component}  from 'react';

class Collections extends Component {
  /*
  constructor(props) {
    this.state ={
      //beadType: all
    }
  }
  */
  render (){
    return(
      <div>
        <h2> cute button bar for diff types of beads</h2>
        <h2>Grid Function Component passed beadType.state</h2>
        <h3>Buttons onclick triggers beadType.state to
            change according to what bead category user wants to see</h3>
      </div>
    )
  }
}
export default Collections;
