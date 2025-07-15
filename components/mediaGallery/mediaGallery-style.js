import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'mediaGallery' })((theme) => ({
  root: {
    padding: theme.spacing(-2, 0),
    backgroundColor:
      theme.palette.mode === 'dark'
    ? theme.palette.background.paper
    : theme.palette.background.default,
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '2.4rem',
      color: theme.palette.text.primary,
    },
    '& p': {
      marginTop: theme.spacing(2),
      color: theme.palette.grey[700],
      fontSize: '1rem',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mediaItem: {
    padding: theme.spacing(1),
    outline: 'none',
    '& img, & video': {
      width: '100%',
      height: 280,
      objectFit: 'cover',
      borderRadius: 16,
      boxShadow: theme.shadows[2],
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: theme.shadows[5],
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.5),
      '& img, & video': {
        height: 'auto',
        aspectRatio: '1 / 1',
        borderRadius: 8,
        boxShadow: theme.shadows[1],
      },
    },
  },
  customDots: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#ccc',
    opacity: 0.5,
    transition: 'all 0.3s ease',
  },
  activeDot: {
    backgroundColor: '#333',
    opacity: 1,
  },
  '@global': {
    '.slick-prev, .slick-next': {
      zIndex: 2,
      width: 36,
      height: 36,
      backgroundColor: '#333 !important',
      borderRadius: '50%',
      display: 'flex !important',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      transition: 'background 0.3s ease',
      top: '35% !important',
    },
    '.slick-prev': {
      left: -12,
    },
    '.slick-next': {
      right: -12,
    },
    '@media screen and (max-width: 600px)': {
      '.slick-prev, .slick-next': {
        display: 'none !important',
      }
    }
  }
}));

export default useStyles;
