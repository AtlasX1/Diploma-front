import React, { useState } from "react";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import ChipInput from "material-ui-chip-input";

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
    <div className={classnames("section", "getDrug")} id="getDrug">
      <div className="setPatient">
        <div className="patientForm">
          <div className="field">
            <TextField
              id="standard-basic"
              label="Номер"
              type="number"
              value={patient.number}
              onChange={(e) => updatePatientData(e.target.value, "number")}
            />
          </div>
          {patientForm.map(({ id, name }) => (
            <div key={id} className="field">
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
            </div>
          ))}
          <div className="submitPatient">Отримати ліки</div>
        </div>
      </div>
      <div className="foundDrugs">Drugs</div>
    </div>
  );
};

export default GetDrug;
