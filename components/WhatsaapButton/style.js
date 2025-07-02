import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'whatsapp-btn' })(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    left: theme.spacing(2),
    zIndex: 1300,
    textDecoration: 'none',
    '& .MuiFab-root': {
      backgroundColor: '#25D366', // color oficial de WhatsApp
      color: '#fff',
      '&:hover': {
        backgroundColor: '#20b955', // un poco más oscuro para hover
      },
    },
  },
}));

export default useStyles;
