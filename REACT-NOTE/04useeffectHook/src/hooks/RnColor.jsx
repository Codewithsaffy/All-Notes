import React from "react";

export default function RnColor() {
  let colors = ["red", "blue", "green", "yellow", "black"];
  let rnNo = Math.floor(Math.random() * 5);
  return colors[rnNo];
}
