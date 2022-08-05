import * as React from "react";

const ErrorBoundary = (props) => {
  const [error, setError] = React.useState(null);

  if (error) {
    throw error;
  }

  React.useEffect(() => {
    load().catch((err) => setError(err));
  }, []);

  return props.children;
};

export default ErrorBoundary;
