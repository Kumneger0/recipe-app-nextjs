"use client";

import React from "react";
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: any) {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
