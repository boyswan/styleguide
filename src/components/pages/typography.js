import connectToStores from 'alt/utils/connectToStores';
import Radium from 'radium';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import Store from '../../stores/store'
import Actions from '../../actions/actions';

import Content from '../main/content'
import {Data} from './../../_export'

import Switch from '../items/switch'
import Type from '../items/singleFont'
import Spinner from '../items/spinner'

@connectToStores
@Radium
export default class Typography extends React.Component {

  static getStores(){
    return [Store];
  }

  static getPropsFromStores(){
    return Store.getState();
  }

  render(){

    let render;
    let device = this.props.device;

    if (this.props.data.length){

      if (device == 'desktop'){
        render = this.props.data[0].typography[0].desktop
      } else if (device == 'tablet'){
        render = this.props.data[0].typography[1].tablet
      } else if (device == 'mobile'){
        render = this.props.data[0].typography[2].mobile
      }

      var typeList = render.map((data, key) => {
        return <Type font={data.font} title={data.title} size={data.size} 
                     weight={data.weight} line={data.line} info={data.info} spacing={data.spacing} colour={data.colour} key={key}></Type>
      });

    }

    return (
      <Content route={this.props.route.path}>
        <div style={Style.body}>
        <Switch/>
          {this.props.data.length ? {typeList} : <Spinner/> }
        </div>
      </Content>
    )

  }

}


let Style = {

  body: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: Data.padding,
    paddingLeft: Data.padding,
    width: '80%',
  },

}
