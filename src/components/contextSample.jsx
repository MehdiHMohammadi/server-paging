import { useState } from "react";
const card = {
  background: "#d8ddf7",
  //   padding: "15px",
  height: "90px",
  //   margin: "10px",
  border: "1px red solid",
};
const GrandFather = (props) => {
  return (
    <div style={card}>
      <h1>1.Grand Father</h1>
      <Father data={props.data} />
    </div>
  );
};
// ---------------------------------------------------------------
const Father = (props) => {
  return (
    <div style={card}>
      <h1>2.Father</h1>
      <Son data={props.data} />
    </div>
  );
};
// ---------------------------------------------------------------
const Son = (props) => {
  return (
    <div style={card}>
      <h1>3.Son</h1>
      <GrandSon data={props.data} />
    </div>
  );
};
// ---------------------------------------------------------------
const GrandSon = (props) => {
  return (
    <div style={card}>
      <h1>4.Grand Son</h1>
      <div style={{ color: "red" }}>{props.data}</div>
    </div>
  );
};
// ---------------------------------------------------------------
const ContextSample = (props) => {
  const add = () => {
    setStae(state + 1);
  };
  return (
    <>
      <h1 onClick={add} style={{ color: "green" }}>
        0.ContextSample
      </h1>
      <div style={{ color: "green" }}>{state}</div>
      <GrandFather data={state} />
    </>
  );
};

export default ContextSample;
