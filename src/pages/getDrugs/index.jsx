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
  { id: "contraindicationDrug", name: "Речовини які вже вжиються пацієнтом" },
];

const GetDrug = (props) => {
  const [patient, setPatient] = useState({
    symptoms: [],
    disease: [],
    subDisease: [],
    specificsOfPatients: [],
    contraindicationDrug: [],
  });

  const updatePatientData = (newData, propName) =>
    setPatient((prevData) => ({ ...prevData, [propName]: newData }));

  return (
    <Grid container item className="section getDrug" id="getDrug">
      <Grid
        container
        item
        className="setPatient"
        lg={6}
        sm={12}
        justify="center"
      >
        <Grid container item className="patientForm" xs={8} justify="center">
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
