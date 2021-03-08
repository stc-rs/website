import qs from "querystring";
import React from "react";
import { Redirect, useLocation } from "react-router-dom";

export const RedirectQuery: React.FC = () => {
  const loc = useLocation();

  if (loc.search && loc.search.length > 1) {
    const redirect = qs.parse(loc.search.substring(1)).redirect;
    if (Array.isArray(redirect)) {
      return <Redirect to={`${decodeURIComponent(redirect[0])}`} />;
    }
    return <Redirect to={`${decodeURIComponent(redirect)}`} />;
  }
  return <Redirect to={`/`} />;
};
