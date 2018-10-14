'use strict';

export default function capitalize() {
  return function(value) {
    if (typeof value !== "string") return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
};
