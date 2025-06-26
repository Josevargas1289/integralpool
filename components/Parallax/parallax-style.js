import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class*="figure"]': {
      height: 500,
      margin: 0,
      width: '100%',
      display: 'block',
      position: 'absolute',
      '& > div': {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      '& svg': {
        position: 'absolute'
      }
    },
  },
  left: {
    textAlign: 'left',
    '& svg': {
      left: -248
    }
  },
  right: {
    textAlign: 'right',
    '& svg': {
      right: -248
    }
  },
  big: {
    '& svg': {
      transform: 'scale(0.7)'
    }
  },
  small: {
    '& svg': {
      transform: 'scale(0.5)'
    }
  },
  cloud: {
    opacity: theme.palette.mode === 'dark' ? 0.12 : 0.25,
    fill: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.primary.light,
    width: 550,
    height: 250
  },
  cloudWrap: {
    position: 'relative',
    height: 500
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
