import React from 'react'
import TagCloud from './index'

export default class Demo1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tagName: [
				'java',
				'javascript',
				'c',
				'c++',
				'fasd',
				'2323ll',
				'fdsaf',
				'fadsf',
				'fdasfa'
			],
		}
	}

	render() {
		return (
			<TagCloud tagName={this.state.tagName} radius={100}></TagCloud>
		)
	}
}
