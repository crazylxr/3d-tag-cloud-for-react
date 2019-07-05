import React from 'react'
import Tag from './tag'

const BASEANGLE = Math.PI / 360

export default class TagCloud extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			speed: this.props.speed || 1,
			R: props.radius || 200,
			angleX: (props.speed || 1) * BASEANGLE,
			angleY: (props.speed || 1) * BASEANGLE,
			tags: [],
			timer: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.tagName != this.props.tagName) {

			const animation = () => {
				this.rotateX()
				this.rotateY()
				requestAnimationFrame(animation)
			}

			requestAnimationFrame(() => {
				animation()
			})

			this.move(nextProps.tagName)
		}
	}

	componentDidMount() {
		document.addEventListener('mousemove', (e) => {
			const angleX = 2 * (e.clientX / document.body.getBoundingClientRect().width - 0.5) * this.state.speed * BASEANGLE;
			const angleY = 2 * (e.clientY / document.body.getBoundingClientRect().height - 0.5) * this.state.speed * BASEANGLE;
			this.setState({
				angleX,
				angleY
			})
		})

		if (this.props.tagName.length === 0) {
			return
		}

		console.log(22)
		const animation = () => {
			this.rotateX()
			this.rotateY()
			requestAnimationFrame(animation)
		}

		requestAnimationFrame(() => {
			animation()
		})

		this.move(this.props.tagName)
	}

	// handleMouseover(e) {
	// 	const angleY = 2 * (e.clientX / document.body.getBoundingClientRect().width - 0.5) * speed * BASEANGLE;
	// 	const angleX = 2 * (e.clientY / document.body.getBoundingClientRect().height - 0.5) * speed * BASEANGLE;
	// 	this.setState({ angleX, angleY })
	// }

	// handleMouseout() {
	// 	const angleX = this.state.speed * BASEANGLE
	// 	const angleY = this.state.speed * BASEANGLE
	// 	this.setState({ angleX, angleY })
	// }

	move(tagName) {
		const len = tagName.length

		const tags = tagName.map((tag, i) => {
			const angleA = Math.acos((2 * (i + 1) - 1) / len - 1)
			const angleB = angleA * Math.sqrt(len * Math.PI)

			const z = this.state.R * Math.cos(angleA)
			const y = this.state.R * Math.sin(angleA) * Math.sin(angleB)
			const x = this.state.R * Math.sin(angleA) * Math.cos(angleB)
			const color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);

			const tagProps = {
				x,
				y,
				z,
				name: tag,
				color,
			}

			return tagProps
		})

		this.setState({ tags: tags })
	}

	rotateX() {
		let cos = Math.cos(this.state.angleX),
			sin = Math.sin(this.state.angleX);

		const tags = this.state.tags.map((tag) => {
			let y = tag.y * cos - tag.z * sin
			let	z = tag.z * cos + tag.y * sin
			tag.y = y
			tag.z = z

			return tag
		});

		this.setState({ tags: tags })
	}

	rotateY() {
		let cos = Math.cos(this.state.angleY)
		let sin = Math.sin(this.state.angleY)

		const tags = this.state.tags.map((tag) => {
			let x = tag.x * cos - tag.z * sin
			let	z = tag.z * cos + tag.x * sin
			tag.x = x;
			tag.z = z;

			return tag
		});

		this.setState({ tags: tags })
	}


	render() {
		const containerStyle = {
			width: '100%',
			heght: '100%'
		}

		const wrapperStyle = {
			position: 'relative',
			left: '50%',
			top: '100px'
		}

		return (
			<div className="tag-cloud-container" style={containerStyle}>
				<div className="wrapper" style={wrapperStyle}>
					{this.state.tags.map((tag, index) => {
						return <Tag url={ this.props.url } key={index} {...tag}> </Tag>
					})}
				</div>
			</div>
		)
	}
}
