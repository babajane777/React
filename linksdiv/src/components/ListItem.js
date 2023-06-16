import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor:props.backgroundColor
      }}
    >
      <img src={props.img} alt={props.name} />
      <a href={props.link}>{props.name}</a>
    </div>
  );
};

export default ListItem;
