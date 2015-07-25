import {alt} from '../_export';

export default alt.createActions(class Actions {

  constructor(){
    this.generateActions(
    	'setData',
      'toggleDevice'
    );
  }

  fetchData(){
    this.dispatch();
    fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => this.actions.setData(data))
    .catch(error => alert(error))
  }

})
