import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import  { withRouter } from 'react-router-dom';

import styles from './style';

const VideoCard = ({ key, children, onClick}) => {
	const classes = styles();
  

  return (
		<Card  key = {key} className={classes.content}>
      <Container className={classes.containerBlack}>
        <div className={classes.controls} onClick={onClick}>
          <IconButton aria-label="startVideo">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </Container>
      <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            {children}
          </Typography>
        </CardContent>
    </Card>
	);
}

export default withRouter(VideoCard); 