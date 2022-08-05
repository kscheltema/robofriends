import * as React from "react";

const ErrorBoundary = (props) => {
  const [error, setError] = React.useState(null);

  // class ErrorBoundary extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       hasError: false,
  //     };
  //   }

  // componentDidCatch(error, info) {
  //   setHasError(true);
  // };

  if (error) {
    throw error;
  }
  return props.children;
  // render() {
  //   if (this.state.hasError) {
  //     return <h1>Oops. This is not good.</h1>;
  //   }
  //   return this.props.children;
  // }
};

export default ErrorBoundary;
