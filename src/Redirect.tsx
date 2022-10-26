import React from "react";
import { Navigate } from "react-router-dom";
import { RelativeRoutingType } from "react-router/dist/lib/context";
import { useParams } from "react-router";
import { updateTo } from "./updateTo";

export interface RedirectProps {
  to: string;
  state?: any;
  relative?: RelativeRoutingType;
}

/**
 * Wraps the <Navigate> component and replaces "/:<paramName>" with "/<paramValue>"
 */
export const Redirect: React.FC<RedirectProps> = ({ to, ...rest }) => {
  const params = useParams();
  return <Navigate to={updateTo(to, params)} {...rest} replace />;
};
