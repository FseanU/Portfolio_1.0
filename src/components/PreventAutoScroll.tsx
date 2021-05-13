import React from "react";
import { Location, RouteComponentProps } from "@reach/router";

type ActionFunction = () => void;

interface OnRouteChangeProps {
  action: ActionFunction;
}

interface OnRouteChangeWorkerProps extends RouteComponentProps {
  action: ActionFunction;
}

class OnRouteChangeWorker extends React.Component<OnRouteChangeWorkerProps> {
  componentDidUpdate(prevProps: OnRouteChangeWorkerProps) {
    if (
      this.props.location &&
      prevProps.location &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      this.props.action();
    }
  }

  render() {
    return null;
  }
}

const OnRouteChange = ({ action }: OnRouteChangeProps) => {
  return (
    <Location>
      {({ location }) => {
        return <OnRouteChangeWorker location={location} action={action} />;
      }}
    </Location>
  );
};

export default OnRouteChange;
