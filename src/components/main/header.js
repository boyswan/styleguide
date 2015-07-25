import Radium from 'radium'
import React from 'react';
import Store from '../../stores/store'
import Actions from '../../actions/actions';

import Headroom from 'react-headroom'

import {Data} from './../../_export'


@Radium
export default class Header extends React.Component {

  render(){
    
    return (
      <div style={Styles.container}>
        <div style={Styles.header}>
          <span> Project styleguide </span>
        </div>
      </div>
    );
  }

}


let Styles = {

  container: {
    paddingLeft: Data.padding,
    paddingRight: Data.padding,
    width: '100%',
    zIndex: 1,
    transition: 'all 0.2s ease-in-out',
    backgroundColor: 'rgba(147,174,203,1)'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: Data.maxWidth,
    margin: '0 auto',
    height: Data.headerHeight,
  },

  logo: {
    display: 'flex',
    alignSelf: 'center',
    backgroundImage: Data.logo,
    height: '50px',
    width: '100px',
    backgroundRepeat: 'no-repeat',
  },

  menu: {
    display: 'flex',
    alignSelf: 'center',
    backgroundImage: Data.menuBtn,
    height: '30px',
    width: '30px',
    backgroundRepeat: 'no-repeat'
  }
}