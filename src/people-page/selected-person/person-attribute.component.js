import React from "react";

export default function PersonAttribute({ children, className = '', style = {} }) {
  return <div className={`flex ${className}`} style={style}>{children}</div>;
}

function Title({ children }) {
  return <div className="font-bold pr-6 w-40">{children}</div>;
}

function Value({ children }) {
  return <div>{children}</div>;
}

PersonAttribute.Title = Title;
PersonAttribute.Value = Value;