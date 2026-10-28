import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const featureStyles = makeStyles({ uniqId: 'feature' })(theme => ({
  root: { position: 'relative', background: theme.palette.background.default, borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}` },
  moreFeature: {
    position: 'relative', padding: theme.spacing(13, 0), overflow: 'hidden', background: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:before': {
      content: '""', position: 'absolute', width: 380, height: 380, top: -250, right: -180,
      borderRadius: '50%', border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
      boxShadow: `0 0 0 60px ${alpha(theme.palette.primary.main, 0.035)}, 0 0 0 120px ${alpha(theme.palette.primary.main, 0.02)}`,
    },
    [theme.breakpoints.down('md')]: { padding: theme.spacing(9, 0) },
  },
  illustration: { position: 'relative', margin: 0 },
  imageCaption: {
    position: 'absolute', left: 22, top: 20, zIndex: 3, display: 'inline-flex', flexDirection: 'column',
    maxWidth: 'calc(100% - 44px)', padding: theme.spacing(1, 1.4),
    color: theme.palette.common.white, fontSize: 11, lineHeight: 1.35,
    border: '1px solid rgba(255,255,255,0.28)', borderRadius: 8,
    background: 'rgba(3,20,34,0.58)', backdropFilter: 'blur(8px)',
    textShadow: '0 2px 10px rgba(0,0,0,0.45)',
    '& span': { marginBottom: 2, color: theme.palette.primary.light, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' },
    [theme.breakpoints.down('sm')]: { left: 16, top: 16, maxWidth: 'calc(100% - 32px)' },
  },
  aboutCopy: {
    position: 'relative', zIndex: 1,
    '& h2': { fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', lineHeight: 1.06, letterSpacing: '-0.035em' },
  },
  aboutDescription: { marginTop: theme.spacing(3), color: theme.palette.text.secondary, fontSize: 16, lineHeight: 1.8 },
  principles: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: theme.spacing(1), margin: theme.spacing(4, 0),
    padding: theme.spacing(2, 0), borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}`,
    '& span': { color: theme.palette.primary.dark, fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textAlign: 'center', textTransform: 'uppercase', '&:not(:last-child)': { borderRight: `1px solid ${theme.palette.divider}` } },
  },
  aboutActions: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: theme.spacing(2), [theme.breakpoints.down('md')]: { justifyContent: 'center' } },
  roundedButton: { minHeight: 48, paddingLeft: theme.spacing(2.5), paddingRight: theme.spacing(2.5), borderRadius: 10, fontWeight: 700, boxShadow: 'none' },
  mainFeature: {
    position: 'relative', padding: theme.spacing(13, 0), overflow: 'hidden', textAlign: 'center',
    background: theme.palette.mode === 'dark' ? '#091f2d' : '#f2f8fa',
    '&:before': {
      content: '""', position: 'absolute', width: 540, height: 540, right: -290, top: -320,
      borderRadius: '50%', border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
      boxShadow: `0 0 0 75px ${alpha(theme.palette.primary.main, 0.025)}, 0 0 0 150px ${alpha(theme.palette.primary.main, 0.015)}`,
      pointerEvents: 'none',
    },
    '& h2': { fontSize: 'clamp(2.25rem, 4vw, 3.7rem)', lineHeight: 1.08, letterSpacing: '-0.035em' },
    [theme.breakpoints.down('md')]: { padding: theme.spacing(9, 0) },
  },
  grid: { position: 'relative', marginTop: `${theme.spacing(6)} !important`, alignItems: 'stretch' },
  item: {
    position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 356,
    padding: theme.spacing(4.5), overflow: 'hidden', textAlign: 'left',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`, borderRadius: 22,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(150deg, #123448 0%, #0a2636 100%)'
      : 'linear-gradient(150deg, #ffffff 0%, #ffffff 65%, #edf9fa 100%)',
    boxShadow: `0 20px 55px ${alpha('#0b435b', theme.palette.mode === 'dark' ? 0.18 : 0.075)}`,
    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
    '&:before': {
      content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4,
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    },
    '&:after': {
      content: '""', position: 'absolute', width: 190, height: 190, top: -110, right: -90,
      borderRadius: '50%', border: `1px solid ${alpha(theme.palette.primary.main, 0.13)}`, pointerEvents: 'none',
    },
    '&:hover': {
      transform: 'translateY(-6px)', borderColor: alpha(theme.palette.primary.main, 0.5),
      boxShadow: `0 28px 60px ${alpha('#0b435b', theme.palette.mode === 'dark' ? 0.26 : 0.13)}`,
    },
    [theme.breakpoints.down('md')]: { minHeight: 0 },
    [theme.breakpoints.down('sm')]: { padding: theme.spacing(3.5), borderRadius: 18 },
  },
  serviceCardTop: {
    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: theme.spacing(4),
    '& figure': {
      display: 'grid', placeItems: 'center', width: 68, height: 68, margin: 0,
      color: theme.palette.mode === 'dark' ? '#59d9e0' : '#086882', borderRadius: 17,
      background: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.16 : 0.12),
      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    },
  },
  serviceNumber: {
    color: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.32 : 0.24),
    fontSize: 48, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.07em', fontVariantNumeric: 'tabular-nums',
  },
  serviceIcon: { width: 32, height: 32 },
  serviceTitle: {
    position: 'relative', marginBottom: theme.spacing(1.5), color: theme.palette.text.primary,
    fontSize: 'clamp(1.35rem, 2vw, 1.55rem)', fontWeight: 700, lineHeight: 1.23,
  },
  serviceDescription: {
    position: 'relative', margin: 0, color: theme.palette.text.secondary,
    fontSize: 15.5, lineHeight: 1.72,
  },
  serviceCardBase: {
    display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: theme.spacing(4),
    '&:before': { content: '""', width: 34, height: 3, borderRadius: 3, background: theme.palette.secondary.main },
    '&:after': { content: '""', flex: 1, height: 1, background: alpha(theme.palette.primary.main, 0.22) },
  },
  chartDeco: { display: 'none' }, divider: { display: 'none' }, text: {}, last: {},
}));

export default featureStyles;
