import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDrugAsync } from "../../redux/reducers/drugsReducerToolkit";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ChipInput from "material-ui-chip-input";
import Table from "./table";
import "./styles.scss";

const drugForm = [{ id: "name", name: "Діюча речовина" }];

const AllDrugs = (props) => {
  const dispatch = useDispatch();
  const addDrug = useCallback((data) => dispatch(addDrugAsync(data)), []);

  const drugsData = useSelector((state) => state.drugs);

  const [data, setData] = useState({
    name: "",
    description: "",
    specificsOfPatients: [],
    contraindicationDrug: [],
    contraindicationHuman: [],
    disease: [],
  });

  const updateData = (newData, propName) =>
    setData((prevData) => ({ ...prevData, [propName]: newData }));

  const addNewSpecificData = () => {
    const tmp = [...data.specificsOfPatients];
    tmp.push({ name: "", description: "" });
    updateData(tmp, "specificsOfPatients");
  };

  const addNewDiseaseData = () => {
    const tmp = [...data.disease];
    tmp.push({ name: "", symptoms: [] });
    updateData(tmp, "disease");
  };

  const changeDiseaseData = (idx, prop, newData) => {
    const tmp = [...data.disease];
    tmp[idx][prop] = newData;
    updateData(tmp, "disease");
  };

  const changeSpecificData = (idx, prop, newData) => {
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
          <Grid container item className="field" xs={12} justify="center">
            <ChipInput
              label={"Не вживати з такими речовинами"}
              value={data["contraindicationDrug"]}
              onAdd={(chip) => {
                const tmp = [...data["contraindicationDrug"]];
                tmp.push(chip);
                updateData(tmp, "contraindicationDrug");
              }}
              onDelete={(chip) => {
                const tmp = data["contraindicationDrug"].filter(
                  (data) => data !== chip
                );
                updateData(tmp, "contraindicationDrug");
              }}
            />
          </Grid>
          <Grid container item className="field" xs={12} justify="center">
            <ChipInput
              label={"Не вживати людям з такими особливостями"}
              value={data["contraindicationHuman"]}
              onAdd={(chip) => {
                const tmp = [...data["contraindicationHuman"]];
                tmp.push(chip);
                updateData(tmp, "contraindicationHuman");
              }}
              onDelete={(chip) => {
                const tmp = data["contraindicationHuman"].filter(
                  (data) => data !== chip
                );
                updateData(tmp, "contraindicationHuman");
              }}
            />
          </Grid>
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
            Лікує хвороби
          </Grid>
          <div className="addNewSpecific" onClick={() => addNewDiseaseData()}>
            Додати хворобу
          </div>
          {data.disease.map((disease, idx) => (
            <Grid item container xs={12} lg={12} key={idx}>
              <Grid container item lg={4} xs={12}>
                <TextField
                  id="standard-basic"
                  label="Назва хвороби"
                  value={disease.name}
                  onChange={(e) =>
                    changeDiseaseData(idx, "name", e.target.value)
                  }
                />
              </Grid>

              <ChipInput
                label={"Симптоми"}
                value={disease.symptoms}
                onAdd={(chip) => {
                  const tmpDisease = [...disease.symptoms];
                  tmpDisease.push(chip);
                  const tmpData = [...data.disease];
                  tmpData[idx].symptoms = tmpDisease;
                  updateData(tmpData, "disease");
                }}
                onDelete={(chip) => {
                  const tmpDisease = [...disease.symptoms].filter(
                    (dataFilter) => dataFilter !== chip
                  );
                  const tmpData = [...data.disease];
                  tmpData[idx].symptoms = tmpDisease;
                  updateData(tmpData, "disease");
                }}
              />
              <div style={{ height: "10px" }}></div>
            </Grid>
          ))}

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
            onClick={() => addDrug(data)}
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
