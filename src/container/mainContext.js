import produce from "immer";
import { createContext, useState } from "react";
import { mongoObjectId } from "../utils/genetors";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    {
      _id: mongoObjectId(),
      statement: "Como te llamas?",
      answerUrl: ""
    },
    {
      _id: mongoObjectId(),
      statement: "Cuantos anos tienes?",
      answerUrl: ""
    },
    {
      _id: mongoObjectId(),
      statement: "Es tu cumpleanos?",
      answerUrl: ""
    },
    {
      _id: mongoObjectId(),
      statement: "X quien votaras?",
      answerUrl: ""
    }
  ]);

  const updateUrlVideoQuestion = (questionId, videoUrl) => {
    setQuestions((questions) =>
      produce(questions, (draftQuestions) => {
        const question = draftQuestions.find(({ _id }) => _id === questionId);
        question.answerUrl = videoUrl;
      })
    );
  };

  return (
    <MainContext.Provider
      value={{
        questions,
        updateUrlVideoQuestion
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

export { MainContextProvider };
