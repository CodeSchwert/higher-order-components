/**
 * Boilerplate code for Higher Order Components
 */

import React, { Component } from 'react';

export default function(ComposedComponent) {
  class SomeComponent extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return SomeComponent;
}
