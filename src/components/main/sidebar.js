import Radium from 'radium';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import {Data} from './../../_export'


@Radium
export default class Typography extends React.Component {

  render(){

    return (
      <div style={Styles.container}>

          <Link to="/typography">
            <p ref={1} style={this.props.route == '/typography' ? Styles.selected : Styles.text}> 
            Typography </p>
          </Link>

          <Link to="/colours">
            <p ref={2} style={this.props.route == '/colours' ? Styles.selected : Styles.text}> 
            Colours </p>
          </Link>

          <Link to="/buttons">
            <p ref={3} style={this.props.route == '/buttons' ? Styles.selected : Styles.text}> 
            Buttons </p>
          </Link>

          <Link to="/forms">
            <p ref={4} style={this.props.route == '/forms' ? Styles.selected : Styles.text}> 
            Forms </p>
          </Link>

          <Link to="/layout">
            <p ref={5} style={this.props.route == '/layout' ? Styles.selected : Styles.text}> 
            Layout </p>
          </Link>

      </div>
    );

  }

}


let Styles = {

  container: {
    paddingLeft: Data.padding,
    width: 250
  },

  text: {
    color: 'rgba(0,0,0,0.5)',
    padding: 10,
    fontSize: 18,
    marginBottom: Data.padding/4,
    transition: 'all 0.1s ease-in-out',

    ':hover': {
      backgroundColor: 'lightblue',
      borderRadius: 5,
      color: 'white',
      transition: 'all 0.1s ease-in-out'
    }

  },

  selected: {
    padding: 10,
    fontSize: 18,
    marginBottom: Data.padding/4,
    backgroundColor: 'coral',
    borderRadius: 5,
    color: 'white'
  }

}
