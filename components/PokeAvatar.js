/*
 * Module dependencies
 */

import React from 'react';


export default class PokeAvatar extends React.Component {
	render() {
		var url = `http://veekom.com/dex/media/pokmon/main-strites/x-y/${this.props.number}.png`
		return <img src={url} className="avatar" />
	}
}