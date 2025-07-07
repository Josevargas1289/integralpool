import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'mediaGallery' })((theme) => ({
  root: {
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '2.2rem',
      color: theme.palette.common.white,
    },
    '& p': {
      marginTop: theme.spacing(2),
      color: theme.palette.grey[200],
    },
  },
  mediaItem: {
    padding: theme.spacing(1),
    outline: 'none',
    '& img, & video': {
      width: '100%',
      height: 240,
      objectFit: 'cover',
      borderRadius: 16,
      boxShadow: theme.shadows[3],
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[6],
      }
    }
  },
    '@global': {
    '.slick-prev, .slick-next': {
      zIndex: 2,
      width: 36,
      height: 36,
      backgroundColor: `${theme.palette.primary.main} !important`,
      borderRadius: '50%',
      display: 'flex !important',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      transition: 'background 0.3s ease',
      top: '35% !important',
    },
    '.slick-prev': {
      left: 0,
    },
    '.slick-next': {
      right: 0,
    },
    '.slick-prev:before, .slick-next:before': {
      fontSize: 20,
      color: '#fff',
      opacity: 1,
    },
    '@media screen and (max-width: 600px)': {
      '.slick-prev, .slick-next': {
        display: 'none !important',
      }
    }
  }

}));

export default useStyles;
