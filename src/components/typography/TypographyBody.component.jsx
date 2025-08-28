import React from "react";
import { getFontWeight } from "../../utils";

export function TypographyBody({ children, weight = 400, className }) {
  let subComponentList = Object.keys(TypographyBody);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, function(child) {
      return child.type.name === key ? React.cloneElement(child, { weight, className }) : null
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

function Tiny({ children, weight, className }) {
  return (
    <p className={`text-xs ${getFontWeight(weight)} ${className}`}>
      {children}
    </p>
  );
}
TypographyBody.Tiny = Tiny;

function Small({ children, weight, className }) {
  return (
    <p
      className={`text-sm ${getFontWeight(weight)} ${className}`}>
      {children}
    </p>
  );
}
TypographyBody.Small = Small;

function Medium({ children, weight, className }) {
  return (
    <p className={`text-base ${getFontWeight(weight)} ${className}`}>
      {children}
    </p>
  );
}
TypographyBody.Medium = Medium;

function Large({ children, weight, className }) {
  return (
    <p className={`text-lg ${getFontWeight(weight)} ${className}`}>
      {children}
    </p>
  );
}
TypographyBody.Large = Large;

function XL({ children, weight, className }) {
  return (
    <p className={`text-xl ${getFontWeight(weight)} ${className}`}>
      {children}
    </p>
  );
}
TypographyBody.XL = XL;

function XXL({ children, weight, className }) {
  return (
    <p className={`text-2xl ${getFontWeight(weight)} ${className}`}>
      {children}
    </p>
  );
}
TypographyBody.XXL = XXL;

