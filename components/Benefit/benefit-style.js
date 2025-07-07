import { makeStyles } from 'tss-react/mui';
import img from 'public/images/imgAPI';

const benefitStyles = makeStyles({ uniqId: 'benefit' })(theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
  wrapper: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    }
  },
  desc: {
    padding: theme.spacing(0, 0, 6, 3),
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3, 6, 3),
      '& button': {
        width: '100%',
      }
    }
  },
  list: {
    listStyle: 'disc',
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white,
    '& li': {
      marginBottom: theme.spacing(1),
      lineHeight: 1.8,
    }
  },
  carouselWrapper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
    '& .slick-slide': {
      textAlign: 'center',
    },
    '& .slick-track': {
      display: 'flex',
      alignItems: 'center',
    }
  },
  logoItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  logoImage: {
    maxHeight: 80,
    width: 'auto',
    maxWidth: '100%',
    transition: 'transform 0.3s ease',
    filter: 'grayscale(100%)',
    opacity: 0.7,
    '&:hover': {
      transform: 'scale(1.1)',
      filter: 'grayscale(0%)',
      opacity: 1,
      cursor: 'pointer'
    }
  }
}));

export default benefitStyles;
