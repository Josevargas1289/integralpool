import { makeStyles } from 'tss-react/mui';
import particleBg from 'public/images/hosting/particle.png';

const pricingStyles = makeStyles({ uniqId: 'testi' })(theme => ({
  decoration: {
    position: 'absolute',
    background: `url(${particleBg}) repeat`,
    width: '100%',
    height: '100%',
  },
  pricingWrap: {
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    '& > *': {
      margin: theme.spacing(3, 1),
      flex: 1,
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(2, 1),
      },
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default pricingStyles;
