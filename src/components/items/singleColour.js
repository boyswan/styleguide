import Radium from 'radium'
import React from 'react';
import Store from '../../stores/store'
import Actions from '../../actions/actions';

import {Data} from './../../_export'

@Radium
export default class Type extends React.Component {

  render(){   

    let colourStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      backgroundColor: this.props.colour,
      borderRadius: 5,
      height: 150,
      width: 150,

      ':hover':{
        transition: 'all 0.2s ease-in-out'
      }
    }

    return (
      <div>

        <div style={Style.infoWrap}>

          <div style={Style.item}>
            <div style={[colourStyle, Style.select]}>
              <span style={Style.amount}> {this.props.colour} </span> 
            </div>
          </div>

        </div>

      </div>
    )
  }

}


let Style = {

  infoWrap:{
    display: 'flex',
    fontSize: 14,
    flexWrap: 'wrap',
  },

  item: {
    paddingRight: Data.padding/2,
    paddingBottom: Data.padding/2,
  },

  type: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#aaaaaa'
  },

  amount: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 600,
    color: 'coral',
  },


}