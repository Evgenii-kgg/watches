import React from "react";
import "./App.css";

import { TextField, Select } from "@material-ui/core";

function Form(props) {
  console.log(props);

  const timeZone = [
    -12,
    -11,
    -10,
    -9,
    -8,
    -7,
    -6,
    -5,
    -4,
    -3,
    -2,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <label>
        Временная зона
        <br />
        <Select
          labelId="demo-simple-select-helper-label"
          id="time"
          type="time"
          defaultValue={0}
          name="data"
          value={props.data}
          onChange={props.handleChange}
        >
          {timeZone.map((zone) => (
            <option  value={zone}>{zone}</option>
          ))}
        </Select>
      </label>
      <br />
      <label style={{ marginLeft: "50px", marginRight: "10px" }}>
        Название
        <br />
        <TextField
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Добавить" onClick={props.Add} />
    </div>
  );
}
export default Form;
