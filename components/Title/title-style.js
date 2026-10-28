import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  left: { textAlign: 'left' },
  right: { textAlign: 'right' },
  center: { textAlign: 'center' },
  caption: {
    display: 'block',
    marginBottom: theme.spacing(1.5),
    color: theme.palette.primary.main,
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
  },
  dark: {},
  title: {
    position: 'relative',
    display: 'block',
    '& h2': {
      margin: 0,
      color: theme.palette.text.primary,
      fontSize: 'clamp(2.25rem, 4vw, 3.8rem)',
      fontWeight: 600,
      lineHeight: 1.08,
      letterSpacing: '-0.045em',
      textWrap: 'balance',
    },
    [`&.${classes.dark}`]: {
      [`& .${classes.caption}`]: { color: theme.palette.primary.light },
      '& h2': { color: theme.palette.common.white },
    },
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    '& h4': {
      color: theme.palette.text.primary,
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      lineHeight: 1.08,
      letterSpacing: '-0.04em',
      fontWeight: 600,
    },
    '& strong': { color: theme.palette.primary.main },
  },
}));

export default titleStyles;