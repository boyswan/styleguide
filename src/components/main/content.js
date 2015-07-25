import Radium from 'radium';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import Store from '../../stores/store'
import Actions from '../../actions/actions';
import {Data} from './../../_export'

import Sidebar from '../main/sidebar'


@Radium
export default class Layout extends React.Component {

  render(){

    return (
      <div style={Style.container}>
        <Sidebar route={this.props.route}/>
        {this.props.children}
      </div>
    );

  }

}


let Style = {

  container: {
    display: 'flex',
    maxWidth: Data.maxWidth,
    margin: '0 auto',
    paddingTop: Data.padding,
  },

}
