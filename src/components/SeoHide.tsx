import React, {Component, Fragment} from 'react';

const base64 = require('base-64');
const utf8 = require('utf8');
interface ISeoHideP {
	sHref?: boolean;
	sContent?: boolean;
	sImg?: boolean;
	children: React.ReactNodeArray; 
}

interface ISeoHideS {
	seochildren: React.ReactNodeArray;
}

export default class SeoHide extends Component<ISeoHideP, ISeoHideS>{
	count:number;
	
	
	constructor(props){
		super(props)
		this.state = {
			seochildren: []
		  };
		this.count = 0;	  
	}
	
	componentWillMount(){
		const {children} = this.props;
		if(!children){
			return;
		}
		let seochildrenWrapper;
		if ( typeof(children) === 'string' || 
			typeof(children[0]) === 'string' ||
			typeof(children[children.length - 1]) === 'string') {
			seochildrenWrapper = [React.createElement('div', {key: 'seoWrappEr11rKey12QQ'}, children)];	
		}
		const seochildren = this.childrenEncode(seochildrenWrapper || children);
		this.setState({
			seochildren
		})
	}
	
	componentDidMount(){
		const {sContent, sImg} = this.props;
		const {seochildren} = this.state;
		if ((sContent || sImg) && !!seochildren.length) {
			this.setState({
				seochildren: this.childrenDecode(seochildren)
			})
		}
	}
	
	render(){
		const {seochildren} = this.state;
		return (
			<Fragment>
				{seochildren}
			</Fragment>	
		)
	}

	childrenEncode(rElements){
		const {sHref, sContent, sImg} = this.props;
		if (typeof(rElements) === 'string') {
			return sContent ? base64.encode(utf8.encode(rElements)) : rElements;
		}
		return rElements.map( item => {
			if (typeof(item) === 'string') {
				return sContent ? base64.encode(utf8.encode(item)) : item;
			}
			const props = Object.assign({}, item.props);	
			props.key = ++this.count;
			
			if ( item.type === 'a' && sHref) {
				
				if (props.title) {
					props.title = base64.encode(utf8.encode(props.title));
				}
				if(props.href){
					const href = props.href;
					props.href = base64.encode(utf8.encode(props.href));
					props.onClick = (event) => {
						event.preventDefault();
						window.location = href;
					}
				}
			}
			if (item.type === 'img' && sImg){
				props.src = base64.encode(utf8.encode(props.src));
				if (props.alt) {
					props.alt = base64.encode(utf8.encode(props.alt));
				}
			}
			if (props.children) {
				props.children = this.childrenEncode(props.children)
			}
			return React.createElement(item.type, props, props.children);
		});
	}

	childrenDecode(rElements){
		const {sContent, sImg} = this.props;
		if (typeof(rElements) === 'string' && sContent) {
			return base64.decode(rElements);
		}
		return rElements.map( item => {
			if (typeof(item) === 'string' && sContent) {
				return base64.decode(item);
			}
			const props = Object.assign({}, item.props);	
			props.key = item.key;
			if (props.title && sContent) {
				props.title = base64.decode(props.title);
			}
			if (props.src && sImg) {
				props.src = base64.decode(props.src);
			}
			if (props.alt && sImg) {
				props.alt = base64.decode(props.alt);
			}
			if (props.children) {
				props.children = this.childrenDecode(props.children)
			}
			return React.createElement(item.type, props, props.children);
		});
	}
}