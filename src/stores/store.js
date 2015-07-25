import React from 'react'
import {alt} from '../_export';
import Actions from '../actions/actions';

class Store {

  constructor(){

    this.bindActions(Actions);

    this.data = []
    this.device = 'desktop'
    this.numb = 1
  }

  setData(data){
    this.data = data
  }

  toggleDevice(value){
    this.device = value
  }


}

export default alt.createStore(Store, 'Store');