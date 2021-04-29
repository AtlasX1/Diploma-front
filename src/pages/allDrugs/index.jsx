import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ChipInput from "material-ui-chip-input";
import Grid from "@material-ui/core/Grid";

import "./styles.scss";

const drugForm = [
  { id: "name", name: "Назва" },
  { id: "activeSubstance", name: "Діюча речовина" },
  { id: "grams", name: "Грам" },
];

const AllDrugs = (props) => {
  const [data, setData] = useState({
    name: "",
    activeSubstance: "",
    grams: "",
    description: "",
    specificsOfPatients: [],
  });

  const updateData = (newData, propName) =>
    setData((prevData) => ({ ...prevData, [propName]: newData }));

  const addNewSpecificData = () => {
    const tmp = [...data.specificsOfPatients];
    tmp.push({ name: "", grams: "", description: "" });
    updateData(tmp, "specificsOfPatients");
  };

  const changeSpecificData = (idx, prop, newData) => {
    const tmp = [...data.specificsOfPatients];
    tmp[idx][prop] = newData;
    updateData(tmp, "specificsOfPatients");
  };

  return (
    <Grid
      container
      lg={12}
      className="section allDrugs"
      id="allDrugs"
      justify="center"
    >
      <Grid container lg={6} xs={12} className="drugForm" justify="center">
        <Grid container md={8} justify="center" className="content">
          {drugForm.map(({ id, name }) => (
            <Grid item container xs={12} justify="center">
              <TextField
                id="standard-basic"
                label={name}
                value={data[id]}
                onChange={(e) => updateData(e.target.value, id)}
              />
            </Grid>
          ))}
          <Grid item container xs={12} justify="center">
            <TextField
              id="standard-basic"
              label="Опис"
              value={data.description}
              multiline
              rows={4}
              onChange={(e) => updateData(e.target.value, "description")}
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            Особливості людини
          </Grid>
          <div className="addNewSpecific" onClick={() => addNewSpecificData()}>
            Додати особливість
          </div>
          {data.specificsOfPatients.map((data, idx) => (
            <Grid item container xs={12} lg={12} key={idx}>
              <Grid lg={4} xs={12}>
                <TextField
                  id="standard-basic"
                  label="Назва"
                  value={data.name}
                  onChange={(e) =>
                    changeSpecificData(idx, "name", e.target.value)
                  }
                />
              </Grid>
              <Grid lg={4} xs={12}>
                <TextField
                  id="standard-basic"
                  label="Грами"
                  value={data.grams}
                  onChange={(e) =>
                    changeSpecificData(idx, "grams", e.target.value)
                  }
                />
              </Grid>
              <Grid lg={4}>
                <TextField
                  id="standard-basic"
                  label="Опис"
                  value={data.description}
                  multiline
                  rows={4}
                  onChange={(e) =>
                    changeSpecificData(idx, "description", e.target.value)
                  }
                />
              </Grid>
              <div style={{ height: "10px" }}></div>
            </Grid>
          ))}
          <Grid className="addNewSpecific" lg={12}>
            Додати
          </Grid>
        </Grid>
      </Grid>
      <Grid container lg={6} xs={12}>
        Table
      </Grid>
    </Grid>
  );
};

export default AllDrugs;
