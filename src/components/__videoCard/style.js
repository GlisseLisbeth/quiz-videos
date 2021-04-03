import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  content: {
    display: 'flex',
		flexDirection: 'column',
		margin: '10px'
  },
  cover: {
    width: 151,
  },
  controls: {
		backgroundColor: 'gray',
		borderRadius: '50%',
		bottom: 0,
		left: 0,
		margin: '5px',
    position: 'absolute',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
	containerBlack: {
		backgroundColor: 'aquamarine',
		position: 'relative',
		height: 336,
		width: '100%',
	}
}));