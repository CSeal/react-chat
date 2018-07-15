import React, {Component} from 'react';
export default class Comp1 extends Component{
	render(){
		const html = '<section><h1>Hello kitty</h1><div class=\'myKitty\'> I like my kitty. Here name is Alena</div></section>'
		return(
			<div dangerouslySetInnerHTML={{__html: html}}/>
		)
	}
} 