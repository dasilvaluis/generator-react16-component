import React, { Component } from 'react';
import PropTypes from 'prop-types';
<% if ('Y' === connectRedux) { %>import { connect } from 'react-redux';<% } %>

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

<% if ('Y' === connectRedux) { %>
const mapStateToProps = state => ({
  // store state mappings
});

const mapDispatchToProps = {
  dispatch
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>);
<% } else { %>
export default <%= name %>;
<% } %>
