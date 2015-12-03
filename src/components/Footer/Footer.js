/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Footer extends Component {

  static propTypes = {
  };

  render() {
    return (
      <div className="Footer">
        <div className="Footer-container">
          <span className="Footer-text">© Tanya Klimenko</span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/" onClick={Link.handleClick}>Home</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/about" onClick={Link.handleClick}>About</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/contact" onClick={Link.handleClick}>Contact</a>
        </div>
      </div>
    );
  }

}

export default Footer;
