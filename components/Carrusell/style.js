import { makeStyles } from 'tss-react/mui';

const carouselStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 6,
    boxShadow: '0 36px 90px rgba(7,34,56,0.18)',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 610,
    overflow: 'hidden',
    '&:after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 48%, rgba(3,20,34,0.72) 100%)',
    },
    [theme.breakpoints.down('md')]: { height: 500 },
    [theme.breakpoints.down('sm')]: { height: 390 },
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    zIndex: 2,
    left: theme.spacing(4),
    right: theme.spacing(4),
    bottom: theme.spacing(4),
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      left: theme.spacing(2.5),
      right: theme.spacing(2.5),
      bottom: theme.spacing(2.5),
    },
  },
  title: {
    fontSize: 'clamp(1.35rem, 3vw, 2rem)',
    fontWeight: 800,
    lineHeight: 1.1,
  },
  subtitle: {
    maxWidth: 520,
    marginTop: theme.spacing(1),
    marginBottom: 0,
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    lineHeight: 1.55,
    [theme.breakpoints.down('sm')]: { fontSize: 13, lineHeight: 1.45 },
  },
  navButtons: {
    position: 'absolute',
    zIndex: 4,
    top: '50%',
    width: 48,
    height: 48,
    minWidth: 48,
    padding: 0,
    color: theme.palette.common.white,
    border: '1px solid rgba(255,255,255,0.4)',
    borderRadius: '50%',
    background: 'rgba(6,30,52,0.34)',
    backdropFilter: 'blur(10px)',
    transform: 'translateY(-50%)',
    '&:hover': { background: theme.palette.secondary.main },
  },
  prevButton: { left: theme.spacing(2) },
  nextButton: { right: theme.spacing(2) },
}));

export default carouselStyles;
