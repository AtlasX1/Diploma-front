import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDrugRequest } from "../../redux/actions/drugsActions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Table from "./table";
import "./styles.scss";

const drugForm = [
  { id: "name", name: "Назва" },
  { id: "activeSubstance", name: "Діюча речовина" },
  { id: "grams", name: "Грам" },
];

const AllDrugs = (props) => {
  const dispatch = useDispatch();
  const addDrug = useCallback((data) => dispatch(addDrugRequest(data)), []);

  const drugsData = useSelector((state) => state.drugsReducer);

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
    console.log(idx, prop, newData);
    const tmp = [...data.specificsOfPatients];
    tmp[idx][prop] = newData;
    updateData(tmp, "specificsOfPatients");
  };

  return (
    <Grid
      item
      container
      lg={12}
      className="section allDrugs"
      id="allDrugs"
      justify="center"
    >
      <Grid container item lg={6} xs={12} className="drugForm" justify="center">
        <Grid container item md={8} justify="center" className="content">
          {drugForm.map(({ id, name }, i) => (
            <Grid container item xs={12} justify="center" key={id + i}>
              <TextField
                id="standard-basic"
                label={name}
                value={data[id]}
                onChange={(e) => updateData(e.target.value, id)}
              />
            </Grid>
          ))}
          <Grid container item xs={12} justify="center">
            <TextField
              id="standard-basic"
              label="Опис"
              value={data.description}
              multiline
              rows={4}
              onChange={(e) => updateData(e.target.value, "description")}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            Особливості людини
          </Grid>
          <div className="addNewSpecific" onClick={() => addNewSpecificData()}>
            Додати особливість
          </div>
          {data.specificsOfPatients.map((data, idx) => (
            <Grid item container xs={12} lg={12} key={idx}>
              <Grid container item lg={4} xs={12}>
                <TextField
                  id="standard-basic"
                  label="Назва особливості"
                  value={data.name}
                  onChange={(e) =>
                    changeSpecificData(idx, "name", e.target.value)
                  }
                />
              </Grid>

              <Grid container item lg={4} xs={12}>
                <TextField
                  id="standard-basic"
                  label="Грами"
                  value={data.grams}
                  onChange={(e) =>
                    changeSpecificData(idx, "grams", e.target.value)
                  }
                />
              </Grid>

              <Grid container item lg={4}>
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
          <Grid
            container
            item
            className="addNewSpecific"
            lg={12}
            onClick={() => {
              addDrug(data);
            }}
          >
            Додати
          </Grid>
        </Grid>
      </Grid>
      <Grid container item lg={5} xs={12}>
        <Table rowData={drugsData} />
      </Grid>
    </Grid>
  );
};

export default AllDrugs;
