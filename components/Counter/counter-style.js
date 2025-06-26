import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })(theme => ({
  counterWrap: {
    position: 'relative',
    margin: theme.spacing(10, 0),
    textAlign: 'center',
    '& h3': {
      color: theme.palette.primary.light,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: 36
      }
    },
    '& p': {
      color: theme.palette.common.white
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
