import React from "react";
import Preloder from "./Preloader";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Preloder>Something went wrong.</Preloder>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
