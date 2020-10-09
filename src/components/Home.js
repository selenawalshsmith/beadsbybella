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
          <div className="heartandsoul">
            <h2>
                You put your heart and soul into crafting your jewlery.
                Let your craftmanship shine by using only the best
                materials.
            </h2>
            <h2>
                At beads by bella, you know you can find gorgeous
                gemstone beads at an afforadable price.
            </h2>
          </div>
        </div>
        <div className="sectionC">
          <h1>Featured</h1>

        </div>
      </div>
    )
  }
}
export default Home;
