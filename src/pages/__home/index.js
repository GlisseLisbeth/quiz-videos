import React, { useContext } from "react";
import { generatePath, useHistory } from "react-router-dom";
import MainContext from "../../context/mainContext";
import { Container, Typography } from '@material-ui/core';
import styles from './style';
import VideoCard from '../../components/__videoCard/index';

const HomePage = () => {
  const { questions } = useContext(MainContext);
  const history = useHistory();

  const classes = styles();

  const _handleClick = (questionId) => () => {
    history.push(generatePath("/question/:questionId", { questionId }));
  };
  return (
    <Container>
			<Typography variant="h2" align="center">Video Cuestionario</Typography>
			<Container className={classes.root}>
        {questions.map((question) => (
          <VideoCard key={question._id} onClick={_handleClick(question._id)}>
            {question.statement}
          </VideoCard>
        ))}
      </Container>
		</Container>	
  );
};

export default HomePage;
