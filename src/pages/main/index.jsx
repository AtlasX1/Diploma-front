import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrugsRequest } from "../../redux/actions/drugsActions";

import { Header } from "../../components";
import AllDrugs from "../allDrugs";
import GetDrugs from "../getDrugs";
import Patients from "../patients";

import "./styles.scss";

const Main = () => {
  const dispatch = useDispatch();

  const func = useCallback(() => dispatch(getAllDrugsRequest()), []);

  useEffect(() => {
    func();
  }, []);

  return (
    <div>
      <Header />
      <GetDrugs />
      <AllDrugs />
    </div>
  );
};

export default Main;
