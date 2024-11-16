import React, { Children } from "react";

export default function TodoCrad(props) {
  const { children } = props;
  return <li className="todoItem">{children}</li>;
}
