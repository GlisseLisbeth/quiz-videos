import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Video from "../../utils/video";
import styles from "./style";


const VideoItem = ({ id, question, url, updateVideoQuiz }) => {
  const classes = styles();

  const {
    isRecording,
    videoUrl,
    userVideoRef,
    startRecording,
    stopRecording
  } = Video;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {(url) ?
          (
            <CardMedia
              className={classes.media}
              title={question}
              component="video"
              controls
              src={videoUrl}
            />
          )
          :
          (
            <CardMedia
              className={classes.media}
              title={question}
              component="video"
              ref={userVideoRef}
              autoPlay
              playsInline
            />
          )

        }
        <CardContent>
          <Typography align="center" variant="body2" color="textSecondary" component="p">
            {question}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {(isRecording)
          ? (
            <IconButton
              color="primary"
              className={classes.firstAction}
              onClick={stopRecording}
            >
              <StopIcon fontSize="large" />
            </IconButton>
          )
          :
          ((!url) &&
            <IconButton
              color="primary"
              className={classes.firstAction}
              onClick={startRecording}
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          )
        }
        {(isRecording) &&
          (
            <div className={classes.feedback}>
              <Typography>1:30 / 2:00</Typography>
              <FiberManualRecordIcon fontSize="large" />
            </div>
          )
        }
      </CardActions>
    </Card>
  )
}

export default VideoItem;