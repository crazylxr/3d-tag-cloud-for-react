import React from 'react'
import TagCloud from '../../src/index'

export default class Demo1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tagName: [],
		}
	}


	render() {
		const tagName = ['java', 'javscript', 'C', 'C++', '前端', 'React', 'Vue', 'redux', '写作', '程序员', '编程']
		const repeat = (tagName.join(',') + ',').repeat(2).split(',').filter(t => !!t)

		return (
			<div style={{ width: '1000px', height: '1000px' ,padding: '150px'}}>
				<TagCloud tagName={repeat} url={ '/pre' } radius={200}></TagCloud>
			</div>
		)
	}
}
