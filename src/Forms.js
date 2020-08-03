import React, {useState} from "react";
import "./App.css";

import { TextField, Select } from "@material-ui/core";

function Form(props) {
  const [fields, setFields] = useState({data:'',name:'', id:props.id})

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

  const handleChange = (event) => {
    setFields({...fields, [event.target.name]: event.target.value})
  };


console.log(fields);

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
          value={fields.data}
          onChange={handleChange}
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
          value={fields.name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Добавить" onClick={()=> props.add(fields)} />
    </div>
  );
}
export default Form;
