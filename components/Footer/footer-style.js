import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const footerStyles = makeStyles({ uniqId: 'footer' })((theme, _params, classes) => ({
  footer: {
    position: 'relative',
    padding: theme.spacing(11, 0, 4),
    overflow: 'hidden',
    background: '#041522',
    '& p': { color: 'rgba(255,255,255,0.62)' },
    '& ul': { margin: 0, padding: 0 },
    '& li': {
      display: 'block',
      marginBottom: theme.spacing(1.25),
      listStyle: 'none',
      '& a': {
        color: 'rgba(255,255,255,0.68)',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'color 180ms ease, padding-left 180ms ease',
        '&:hover': { color: theme.palette.primary.main, paddingLeft: 4 },
      },
    },
  },
  title: {
    marginBottom: theme.spacing(2.5),
    color: theme.palette.primary.main,
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
  },
  quickLinks: { marginTop: theme.spacing(1) },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
    '& img': { width: 58, height: 58, objectFit: 'contain' },
    '& h6': {
      color: `${theme.palette.common.white} !important`,
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
  },
  footerDesc: {
    maxWidth: 340,
    fontSize: 14,
    lineHeight: 1.75,
  },
  contactList: {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, marginTop: 24,
    '& a': { color: 'rgba(255,255,255,0.76)', fontSize: 13, textDecoration: 'none' },
    '& a:hover, & a:focus-visible': { color: theme.palette.primary.main, textDecoration: 'underline' },
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(3),
    '& button': {
      width: 42,
      height: 42,
      color: theme.palette.common.white,
      border: '1px solid rgba(255,255,255,0.14)',
      background: 'rgba(255,255,255,0.045)',
      transition: 'background 180ms ease, transform 180ms ease',
      '&:hover': { background: theme.palette.primary.main, transform: 'translateY(-3px)' },
    },
  },
  alignCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  langWrapper: {
    marginTop: theme.spacing(1),
    [`& > div`]: { margin: '0 auto' },
  },
  copyWrapper: {
    position: 'relative',
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(3),
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.09)',
    '& p': { color: 'rgba(255,255,255,0.42)', fontSize: 12, letterSpacing: '0.05em' },
  },
  selectLang: {
    width: 220,
    color: theme.palette.common.white,
    [`& .${classes.icon}`]: { color: theme.palette.primary.main },
    '& svg': { color: theme.palette.primary.main },
    '& fieldset': { borderColor: `${alpha(theme.palette.common.white, 0.2)} !important` },
  },
  selectMenu: {},
  icon: {},
  link: {},
  footerCounter: {},
  category: {},
  listText: {},
  blogItem: {},
}));

export default footerStyles;