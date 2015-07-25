import connectToStores from 'alt/utils/connectToStores';
import Radium from 'radium';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import Store from '../../stores/store'
import Actions from '../../actions/actions';

import Content from '../main/content'
import Sidebar from '../main/sidebar'
import {Data} from './../../_export'

import Colour from '../items/singleColour'
import Spinner from '../items/spinner'

@connectToStores
@Radium
export default class Colours extends React.Component {

  static getStores(){
    return [Store];
  }

  static getPropsFromStores(){
    return Store.getState();
  }

  render(){

    if (this.props.data.length){
      var data = this.props.data[1].colours.map((value, i) => {
        return <Colour colour={value} key={i} />
      });
    }

    return (
      <Content route={this.props.route.path}>
        <div style={Style.body}>
        {this.props.data.length ? {data} : <Spinner/>}
         </div>
      </Content>
    );
  }

}


let Style = {

  body: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: Data.padding,
    width: '80%',
  }

}
