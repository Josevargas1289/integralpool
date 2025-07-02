import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import bgChart from 'public/images/hosting/chart_bg.png';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  last: {},
  mainFeature: {
    textAlign: 'center',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    '& figure': {
      background: alpha(theme.palette.secondary.light, 0.5),
      width: 100,
      height: 100,
      margin: '0 auto',
      borderRadius: '50%',
      marginBottom: theme.spacing(3), // ← MENOR separación en móvil
      [theme.breakpoints.down('sm')]: {
        width: 80,
        height: 80,
        marginBottom: theme.spacing(2),
      }
    },
    '& img': {
      position: 'relative',
      height: 160,
      left: '-50%',
      top: '-50%',
      transform: 'translate(25%, 25%)',
      [theme.breakpoints.down('sm')]: {
        height: 120
      }
    },
    '& h6': {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
    [`& .${classes.item}`]: {
      opacity: 1
    }
  },
  grid: {
    marginTop: theme.spacing(5)
  },
  divider: {},
  moreFeature: {
    position: 'relative',
    '& figure': {
      margin: 0,
      marginTop: theme.spacing(18),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(10)
      }
    },
    [`& .${classes.divider}`]: {
      border: 'none',
      display: 'block',
      background: 'none',
      margin: theme.spacing(5, 0),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(6, 0),
      },
      '&:before': {
        content: '""',
        background: theme.palette.divider,
        width: 80,
        height: 8,
        borderRadius: 8,
        left: '50%',
        marginLeft: -40,
        position: 'absolute',
        [theme.breakpoints.up('md')]: {
          marginLeft: -60,
        }
      },
      '&:after': {
        content: '""',
        background: theme.palette.divider,
        width: 20,
        height: 8,
        left: '50%',
        marginLeft: 25,
        borderRadius: 8,
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      }
    }
  },
  chartDeco: {
    width: '100%',
    height: 420,
    bottom: 0,
    position: 'absolute',
    background: `url(${bgChart}) no-repeat center bottom`,
    backgroundSize: 'cover',
  },
  item: {
    position: 'relative',
    padding: theme.spacing(0, 3),
    [`&.${classes.last}`]: {
      '& figure': {
        marginTop: theme.spacing(10)
      }
    },
    '& p': {
      marginBottom: theme.spacing(3),
    }
  },
  text: {
    margin: theme.spacing(18, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(4, 0),
    },
    [theme.breakpoints.only('sm')]: {
       marginTop: theme.spacing(12),
      },
      [theme.breakpoints.only('xs')]: {
         marginTop: theme.spacing(12)
      },
  },
  illustration: {
    '& img': {
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%',
      [theme.breakpoints.only('sm')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.only('xs')]: {
        maxWidth: 300,
        width: '100%',
        marginTop: theme.spacing(-12)
      }
    }
  }
}));

export default featureStyles;
