import React, {Component} from 'react';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Comp4 from './components/Comp4';
export default class LPProcessor extends Component{
	render(){
		const LPElements = [<Comp1/>, <Comp2/>, <Comp3/>, <Comp4/>]
		return(
			LPElements
		)
	}
} 