import React from 'react'
import TagCloud from '../../src/index'

export default class Demo1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tagName: [],
		}
	}

	componentDidMount() {
		const tagName = ['java', 'javscript', 'C', 'C++', '前端', 'React', 'Vue', 'redux', '写作', '程序员', '编程']
		setTimeout(() => {
			this.setState({ tagName: tagName })
		}, 1000)
	}

	render() {
		return (
			<div style={{ width: '1000px', height: '1000px' }}>
				<TagCloud tagName={this.state.tagName} radius={100}></TagCloud>
			</div>
		)
	}
}
