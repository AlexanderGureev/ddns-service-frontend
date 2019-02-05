import React, { Component } from "react";
// import Preloder from "./Preloader";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   componentDidCatch(error, info) {
//     console.log(error);
//     console.log(info);
//     this.setState({ hasError: true });
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <Preloder>Something went wrong.</Preloder>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
import * as Sentry from "@sentry/browser";

class ExampleBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  };

  handler = () => Sentry.showReportDialog();
  render() {
    if (this.state.error) {
      // render fallback UI
      return <a onClick={this.handler}>Report feedback</a>; //eslint-disable-line
    }
    // when there's not an error, render children untouched
    return this.props.children;
  }
}

export default ExampleBoundary;
