import React from 'react'

const R = 200;

const _focalLength = R * 1.5; // 焦距

export default class Tag extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const scale = _focalLength / (_focalLength - this.props.z)
		const alpha = (this.props.z + R) / (2 * R)

		const tagStyle = {
			display: 'inline-block',
			position: 'absolute',
			height: '50px',
			lineHeight: '50px',
			fontSize: '20px',
			textDecoration: 'none'
		}

		const otherStyle = {
			left: this.props.x + 'px',
			top: this.props.y + 'px',
			fontSize: 14 * scale + 'px',
			opacity: alpha + 0.5,
			color: this.props.color,
		}

		return (
			<a href={ this.props.url + '/' + this.props.name } style={{ ...tagStyle, ...otherStyle }}>{this.props.name}</a>
		)
	}
}
