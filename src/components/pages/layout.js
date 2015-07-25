import Radium from 'radium';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import Store from '../../stores/store'
import Actions from '../../actions/actions';


import Content from '../main/content'
import Sidebar from '../main/sidebar'
import {Data} from './../../_export'

@Radium
export default class Layout extends React.Component {

   render(){

    return (
      <Content route={this.props.route.path}>
        <div style={Style.body}>
            <p style={Style.text}> layout </p>
            <p style={Style.text}> layout </p>
            <p style={Style.text}> layout </p>
            <p style={Style.text}> layout </p>
            <p style={Style.text}> layout </p>
         </div>
      </Content>
    );

  }

}


let Style = {

  body: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingRight: Data.padding,
    paddingLeft: Data.padding,
    width: '80%'
  },

  text: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 18,
    backgroundColor: 'coral',
    paddingBottom: Data.padding
  }

}
