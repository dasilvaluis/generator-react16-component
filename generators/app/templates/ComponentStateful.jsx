import React, { Component } from 'react';
import PropTypes from 'prop-types';

class <%= name %> extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ();
  }
}

<%= name %>.defaultProps = {
  exProp: ''
};

<%= name %>.propTypes = {
  exProp: PropTypes.string
};

export default <%= name %>;