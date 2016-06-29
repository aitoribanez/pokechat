/*
 * Module dependencies
 */

import React from 'react';
import $ from 'jquery';

export default class PokeAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '' }
  }

  componentDidMount() {
    var url = `http://pokeapi.co/api/v1/sprite/${this.props.number}/`;
    this.serverRequest = $.get(url, function (result) {
      this.setState({
        image: 'http://pokeapi.co/' + result.image
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return <div className="avatar-container">
      <img src={this.state.image} className="avatar" />
    </div>
  }
}