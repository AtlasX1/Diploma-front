import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDrugsAsync } from "../../redux/reducers/drugsReducerToolkit";

import { Header } from "../../components";
import AllDrugs from "../allDrugs";
import GetDrugs from "../getDrugs";

import "./styles.scss";

const Main = () => {
  const dispatch = useDispatch();
  const func = useCallback(() => dispatch(getDrugsAsync()), []);
  useEffect(() => func(), []);

  return (
    <div>
      <Header />
      <GetDrugs />
      <AllDrugs />
    </div>
  );
};

export default Main;
