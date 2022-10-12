import { Component } from "react";

class ErrorBoundries extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundries;
