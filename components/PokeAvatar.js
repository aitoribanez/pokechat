/*
 * Module dependencies
 */

import React from 'react';


export default class PokeAvatar extends React.Component {
	render() {
		var url = `http://veekom.com/dex/media/pokmon/main-strites/x-y/${this.props.number}.png`
		return <div className="avatar-container">
			<img src={url} className="avatar" />
		</div>
	}
}