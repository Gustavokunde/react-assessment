import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong.</h1>
      <p>Please refresh the page or try again later.</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => setHasError(false)}
      >
        Retry
      </button>
    </div>
  ) : (
    <React.Suspense fallback={<p>Loading...</p>}>
      <ErrorCatcher setHasError={setHasError}>{children}</ErrorCatcher>
    </React.Suspense>
  );
};

interface ErrorCatcherProps {
  children: ReactNode;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

class ErrorCatcher extends React.Component<ErrorCatcherProps> {
  componentDidCatch() {
    this.props.setHasError(true);
  }

  render() {
    return this.props.children;
  }
}

export function withErrorBoundary<T extends object>(Component: React.FC<T>) {
  return (props: T) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
}

export default ErrorBoundary;
