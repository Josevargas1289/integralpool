import { makeStyles } from 'tss-react/mui';

const carouselStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 1000,
    margin: '0 auto',
    borderRadius: 12,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      boxShadow: 'none',
      marginTop: theme.spacing(-12),
    },
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    maxHeight: 480,
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'bottom',
    borderRadius: 12,
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '90%',
    background: 'rgba(0, 0, 0, 0.15)', // ✅ Más sutil
    padding: theme.spacing(1.5, 3),
    borderRadius: 6,
    color: '#fff',
    textAlign: 'center',
    textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2),
    },
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      lineHeight: 1.2,
    },
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.2,
    marginTop: theme.spacing(0.5),
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  navButtons: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    minWidth: 'auto',
    padding: 0,
    border: 'none',
    background: 'transparent',
    color: '#fff',
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
  prevButton: {
    left: theme.spacing(1),
  },
  nextButton: {
    right: theme.spacing(1),
  },
}));

export default carouselStyles;
