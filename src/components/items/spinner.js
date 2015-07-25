import Radium from 'radium'
import React from 'react';

import {Data} from './../../_export'

@Radium
export default class Spinner extends React.Component {

  render(){   

    return (
      <div style={Styles.wrap}>
        <div style={Styles.spinner}></div>
      </div>
    )
  }

}


let Styles = {

  wrap:{
    display: 'flex',
    justifyContent: 'center',
  },

  spinner: {
    display: 'flex',
    justifyContent: 'center',
    width: 15,
    height: 15,
    backgroundColor: 'red'
  }

}