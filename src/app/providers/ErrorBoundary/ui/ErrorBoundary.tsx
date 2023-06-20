/* eslint-disable @typescript-eslint/indent */

import { Component } from 'react';

import { ErrorPage } from 'pages/ErrorPage';

import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    console.log(hasError, 'hasError');
    if (hasError) {
      return <ErrorPage />;
    }

    return children;
  }
}
