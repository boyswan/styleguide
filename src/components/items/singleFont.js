import connectToStores from 'alt/utils/connectToStores';
import StyleSheet from 'react-style'
import React from 'react';
import Store from '../../stores/store'
import Actions from '../../actions/actions';

import Spring from 'react-motion'

import {Data} from './../../_export'


@connectToStores
export default class Type extends React.Component {

  static getStores(){
    return [Store];
  }

  static getPropsFromStores(){
    return Store.getState();
  }

  constructor(props){
    super(props)
    this.state = {
      open: 0
    }
  }

  componentDidMount(){
    this.setState({open: 1})
  }

  render(){   

    let headerStyle = {
      fontSize: this.props.size,
      fontWeight: this.props.weight,
      lineHeight: this.props.line,
      letterSpacing: this.props.spacing,
      color: this.props.colour

    }

    return (
      <div>

        <Spring endValue={{val: this.state.open ? 1 : 0}}>
          {interpolated =>
          <div style={{ opacity:interpolated.val }}>

        <span styles={[headerStyle, Style.header]}> 
          {this.props.title} 
        </span>

        <div styles={Style.infoWrap}>

        <div key={1} styles={Style.col}>
          <div styles={Style.item}>
            <span>Font: </span>
            <span styles={Style.amount}> {this.props.font}</span> 
          </div>

          <div styles={Style.item}>
            <span>Font-size: </span>
            <span styles={Style.amount}> {this.props.size} px </span> 
          </div>
        </div>

        <div key={2} styles={Style.col}>
          <div styles={Style.item}>
            <span>Font-weight: </span>
            <span styles={Style.amount}> {this.props.weight}</span> 
          </div>

          <div styles={Style.item}>
            <span>Line-height </span>
            <span styles={Style.amount}> {this.props.line} px </span> 
          </div>
        </div>

        <div key={3} styles={Style.col}>
          <div styles={Style.item}>
            <span>Letter-spacing: </span>
            <span styles={Style.amount}> {this.props.spacing} px </span> 
          </div>

          <div styles={Style.item}>
            <span>Colour: </span>
            <span styles={Style.amount}> {this.props.colour} </span> 
          </div>
        </div>

        </div>

        <div styles={Style.divider}></div>

        <div styles={Style.noteWrap}>
          <p> {this.props.info}</p>
        </div>

        <div styles={Style.divider2}></div>

        </div>
          }
        </Spring>
      </div>
    )
  }

}


let Style = StyleSheet.create({

  header: {
    display: 'flex',
    paddingBottom: Data.padding/1.5
  },

  infoWrap:{
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: Data.padding/4,
    fontSize: 14,
  },

  col: {
    display: 'flex',
    flexDirection:'row',
  },

  '@media screen and (max-width: 1024px)': {
    col: {
      flexDirection:'column'
    }
  },

  item: {
    marginRight: Data.padding/2,
    color: '#aaaaaa',
    marginBottom: 10
  },

  amount: {
    fontWeight: 600,
    color: 'coral',
  },

  divider: {
    borderBottom: '1px solid #dddddd',
    marginBottom: Data.padding/4
  },

  divider2: {
    borderBottom: '1px solid #dddddd',
    marginBottom: Data.padding
  },


  noteWrap: {
    paddingBottom: Data.padding/4,
    color: '#bbbbbb',
    fontSize: 14,
    fontStyle: 'italic',
  }


})