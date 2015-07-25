import Radium from 'radium';
const Style = Radium.Style
import connectToStores from 'alt/utils/connectToStores';

import React from 'react';

// React Router
import { Router, Route, Link, Redirect } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

// Alt
import Store 				from './stores/store'
import Actions 			from './actions/actions'

// Main
import Header 			from './components/main/header'
import Sidebar 			from './components/main/sidebar'

// Pages
import Typography 	from './components/pages/typography'
import Colours 			from './components/pages/colours'
import Buttons 			from './components/pages/buttons'
import Forms  			from './components/pages/forms'
import Layout 			from './components/pages/layout'

// Data
import Data 				from './_export'


let Global = {
  '*': {
		boxSizing: 'border-box',
	  margin: 0,
	  padding: 0,
	  listStyle: 'none',
	  border: 0,
	  textDecoration: 'none',
	  fontFamily: 'Helvetica',
  }
}
@connectToStores
@Radium
class App extends React.Component{

  static getStores(){
    return [Store];
  }

  static getPropsFromStores(){
    return Store.getState();
  }

  componentDidMount(){
    Actions.fetchData();
  }

	render() {

		return (
			<div>
				<Style rules={Global} />
				<Header />
        {this.props.children}
			</div>
		);
	}

};

React.render((
  <Router history={history}>
		<Redirect from="/" to="/typography" />
    <Route path="/" component={App}>
      <Route path="/typography" component={Typography}/>
      <Route path="/colours" component={Colours}/>
      <Route path="/buttons" component={Buttons}/>
      <Route path="/forms" component={Forms}/>
      <Route path="/layout" component={Layout}/>
    </Route>
  </Router>
), document.body);
