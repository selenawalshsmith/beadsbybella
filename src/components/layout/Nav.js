import React, {Component}  from 'react';
import "../../styles/Nav.css"
import {Link} from "react-router-dom"
class Nav extends Component {
  constructor(props) {
    super();
  }
  render (){
    return(
      <div>
        <div className="navWrapper">
          <div className="navContent">
            <Link to="/collections"><h4 className="navItem">shop</h4></Link>
            <h4 className="navItem">about</h4>
            <h1 className="navBrand">beads by bella.</h1>
            <h4 className="navItem cart">
              cart
            </h4>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav;
