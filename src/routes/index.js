import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { MainContextProvider } from "../context/mainContext";

import HomePage from "../pages/__home";
import QuestionDetailPage from "../pages/__question/__[questionId]";

const Root = () => {
  return (
    <MainContextProvider>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/question/:questionId" component={QuestionDetailPage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </MainContextProvider>
  );
};

export default Root;
