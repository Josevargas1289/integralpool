import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  modalPaper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxWidth: 600,
    width: '90%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    transform: 'translate(-50%, -50%)',
    borderRadius: 12,
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  divider: {
    margin: `${theme.spacing(2)} 0`,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  alignLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }
}));

export default useStyles;
