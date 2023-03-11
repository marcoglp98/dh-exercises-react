import React from "react";

export const Sum = ({ values }) => {
  return <h1>{values.reduce((acc, curr) => acc + curr, 0)}</h1>;
};

Sum.defaultProps = {
  values : 1
}