import connectToStores from 'alt/utils/connectToStores';
import Radium from 'radium'
import React from 'react';
import RadioGroup from 'react-radio-group'

import Store from '../../stores/store'
import Actions from '../../actions/actions'

import {Data} from './../../_export'

@Radium
@connectToStores
export default class Switch extends React.Component {

  static getStores(){
    return [Store];
  }

  static getPropsFromStores(){
    return Store.getState();
  }

  render(){   

    return (
      <div style={Styles.wrap}>
        <RadioGroup
          selectedValue={this.props.device}
          onChange={this.toggleDevice}>
          {Radio => (
            <div>

              <label style={Styles.radio}>
                <Radio value="desktop" />Desktop
              </label>

              <label style={Styles.radio}>
                <Radio value="tablet" />Tablet
              </label>

              <label style={Styles.radio}>
                <Radio value="mobile" />Mobile
              </label>

            </div>
          )}
        </RadioGroup>
      </div>
    )
  }

  toggleDevice(value){
    Actions.toggleDevice(value);
  }

}


let Styles = {

  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Data.padding
  },


}