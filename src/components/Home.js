import React, {Component}  from 'react';
import "../styles/Home.css";


class Home extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <div className="sectionA">
          <img className="img1" src={window.location.origin + "/pinkopalbeads.jpg"}/>
          <img className="whimsical" src={window.location.origin + "/whimsical.png"}/>
        </div>
        <div className="sectionB">
          <h1>Featured</h1>
        </div>
      </div>
    )
  }
}
export default Home;
