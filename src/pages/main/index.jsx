import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testRequest } from "../../redux/actions/testActions";

import { Header } from "../../components";
import AllDrugs from "../allDrugs";
import GetDrugs from "../getDrugs";
import Patients from "../patients";

import "./styles.scss";

const Main = () => {
  const dispatch = useDispatch();

  const func = useCallback((data) => dispatch(testRequest(data)), []);

  return (
    <div>
      <Header />
      <GetDrugs />
      <AllDrugs />
      <Patients />
    </div>
  );
};

export default Main;
