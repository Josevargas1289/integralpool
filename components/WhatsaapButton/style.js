import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'whatsapp-btn' })(theme => ({
  fab: {
    position: 'fixed', bottom: theme.spacing(5), left: theme.spacing(2), zIndex: 1300,
    opacity: 1, textDecoration: 'none', transition: 'opacity 180ms ease',
    '& .MuiFab-root': {
      backgroundColor: '#25D366', color: '#fff', boxShadow: '0 10px 28px rgba(18,140,73,0.3)',
      '&:hover': { backgroundColor: '#20b955' },
    },
    [theme.breakpoints.down('sm')]: { bottom: theme.spacing(2.5), left: theme.spacing(1.5) },
    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
  },
  scrolling: {
    opacity: 0.26,
    '&:hover, &:focus-visible': { opacity: 0.82 },
  },
}));

export default useStyles;