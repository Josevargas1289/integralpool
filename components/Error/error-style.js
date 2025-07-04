import { makeStyles } from 'tss-react/mui';
import errorDeco from 'public/images/hosting/error-deco.png';

const useStyles = makeStyles({ uniqId: 'header' })(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: '120vh',
    display: 'flex',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(20, 0, 10)
    },
    '& h3': {
      color: theme.palette.common.white,
      fontSize: 84,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      position: 'relative',
      zIndex: 1,
    },
    '&:before': {
      content: '""',
      width: 320,
      height: 230,
      background: `url(${errorDeco}) no-repeat`,
      backgroundSize: '100%',
      position: 'absolute',
      top: theme.spacing(-3),
      left: theme.spacing(-5),
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      margin: theme.spacing(5, 0, 20),
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
