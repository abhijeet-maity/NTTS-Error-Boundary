import React, { Component } from 'react';
import ErrorUI from './ErrorUI';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
        hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError : true};
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error occurred", error, errorInfo);
  }
  
  render() {
    if(this.state.hasError) {
        return (
            <ErrorUI/>
        )
    }
    return this.props.children
  }
}

export default ErrorBoundary