import React, { useState } from "react";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import ChipInput from "material-ui-chip-input";
import Grid from "@material-ui/core/Grid";

import "./styles.scss";

const patientForm = [
  { id: "symptoms", name: "Симптоми" },
  { id: "disease", name: "Хвороба" },
  { id: "subDisease", name: "Супутні захворювання" },
  { id: "specificsOfPatients", name: "Особливості пацієнта" },
];

const GetDrug = (props) => {
  const [patient, setPatient] = useState({
    number: 0,
    symptoms: [],
    disease: [],
    subDisease: [],
    specificsOfPatients: [],
  });

  const updatePatientData = (newData, propName) =>
    setPatient((prevData) => ({ ...prevData, [propName]: newData }));

  return (
    <Grid container className="section getDrug" id="getDrug">
      <Grid container className="setPatient" lg={6} sm={12} justify="center">
        <Grid container item className="patientForm" xs={8} justify="center">
          <Grid container item className="field" xs={12} justify="center">
            <TextField
              id="standard-basic"
              label="Номер пацієнта"
              type="number"
              value={patient.number}
              onChange={(e) => updatePatientData(e.target.value, "number")}
            />
          </Grid>
          {patientForm.map(({ id, name }) => (
            <Grid
              container
              item
              key={id}
              className="field"
              xs={12}
              justify="center"
            >
              <ChipInput
                label={name}
                value={patient[id]}
                onAdd={(chip) => {
                  const tmp = [...patient[id]];
                  tmp.push(chip);
                  updatePatientData(tmp, id);
                }}
                onDelete={(chip) => {
                  const tmp = patient[id].filter((data) => data !== chip);
                  updatePatientData(tmp, id);
                }}
              />
            </Grid>
          ))}
          <div className="submitPatient">Отримати ліки</div>
        </Grid>
      </Grid>
      <Grid container item lg={6} sm={12} className="foundDrugs">
        Drugs
      </Grid>
    </Grid>
  );
};

export default GetDrug;
