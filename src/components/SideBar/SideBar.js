import React, { Component } from 'react';
import styles from './SideBar.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SideBar extends Component {

  render() {
    return (
      <div className="SideBar">
        <div className="SideBar-container">
          "I'm SideBar"
        </div>
      </div>
    );
  }
}

export default SideBar;
