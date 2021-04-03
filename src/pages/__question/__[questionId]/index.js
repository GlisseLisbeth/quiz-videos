import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../../../context/mainContext";
import VideoItem from "../../../components/__videoItem/index";

const VideoDetailPage = ({match, history}) => {
  const { questionId } = useParams();

  const { questions, updateUrlVideoQuestion } = useContext(MainContext);

  const goToHome = () => history.push(`/`);
  const goToNextPage = () => (questionId < questions.length) && history.push(`/question/${questionId + 1}`);
  const goToPrevPage = () => (questionId > 1) && history.push(`/question/${questionId - 1}`);

  const ButtonPrev = () =>
    <button
        type="button"
        onClick={goToPrevPage}
        className="wizard__buttons-left"
      >
        Atras
      </button>;

  const ButtonNext = () =>
    <button
        type="button"
        onClick={goToNextPage}
        className="wizard__buttons-right"
      >
        Siguiente
      </button>;

const ButtonHome = () =>
<button
    type="button"
    onClick={goToHome}
    className="wizard__buttons-home"
  >
    Volver
  </button>;

  const question = useMemo(() => {
    return questions.find(({ _id }) => _id === questionId);
  }, [questionId, questions]);

  return (
    <div className="wizard">
      <ButtonHome />
      <VideoItem>{question.statement}</VideoItem>
      <div className="wizard__buttons">
        <ButtonPrev />
        <ButtonNext />
      </div>
    </div>
  );
};

export default VideoDetailPage;
