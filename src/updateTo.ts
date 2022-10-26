import { Params } from "react-router-dom";

export const updateTo = (to: string, params: Readonly<Params<string>>) => {
  const entries = Object.entries(params);
  let path = `${to}`;

  entries.forEach(([key, value]) => {
    path = path.replace(`:${key}`, `${value}`);
  });

  return path;
};
