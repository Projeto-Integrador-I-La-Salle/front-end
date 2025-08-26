import React from "react";
import { getFontWeight } from "../../utils";

export function TypographyBody({ children, weight = 400 }) {
  let subComponentList = Object.keys(TypographyBody);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, function(child) {
      return child.type.name === key ? React.cloneElement(child, { weight }) : null
    });
  });

  return (
    <div className="font-poppins text-gray-900">
      {subComponents.map(function(component) {
        return component;
      })}
    </div>
  );
}

function Tiny({ children, weight }) {
  return (
    <p className={`text-xs ${getFontWeight(weight)}`}>
      {children}
    </p>
  );
}
TypographyBody.Tiny = Tiny;

function Small({ children, weight }) {
  return (
    <p
      className={`text-sm ${getFontWeight(weight)}`}>
      {children}
    </p>
  );
}
TypographyBody.Small = Small;

function Medium({ children, weight }) {
  return (
    <p className={`text-base ${getFontWeight(weight)}`}>
      {children}
    </p>
  );
}
TypographyBody.Medium = Medium;

