import React from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";
import { useUser } from "./Authneticated";

export interface ProtectedProps extends RouteProps {
  allowPartial?: boolean;
}

export const Protected: React.FC<ProtectedProps> = (props: ProtectedProps) => {
  const user = useUser();
  const loc = useLocation();

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  const redirect = encodeURIComponent(loc.pathname + loc.search);

  if (user === null) {
    return <Redirect to={`/login?redirect=${redirect}`} />;
  }

  return <Route {...props} />;
};
