import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const bannerStyles = makeStyles({ uniqId: 'banner' })(theme => ({
  root: {
    position: 'relative', minHeight: 800, display: 'flex', alignItems: 'center',
    overflow: 'hidden', color: theme.palette.common.white, background: '#082748',
    [theme.breakpoints.down('md')]: { minHeight: 750, paddingTop: 0 },
  },
  background: {
    position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
    objectPosition: 'center 58%', transform: 'scale(1.01)', animation: '$heroReveal 1.1s ease-out both',
    '@media (prefers-reduced-motion: reduce)': { animation: 'none', transform: 'none' },
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(90deg, rgba(5,31,61,0.90) 0%, rgba(10,49,83,0.72) 48%, rgba(12,55,84,0.18) 82%)',
    '&:after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.18), transparent 40%, rgba(3,24,45,0.46))' },
    [theme.breakpoints.down('md')]: { background: 'linear-gradient(90deg, rgba(5,31,61,0.90), rgba(8,45,78,0.66))' },
  },
  container: {
    position: 'relative', zIndex: 2, paddingTop: theme.spacing(15), paddingBottom: theme.spacing(9),
    [theme.breakpoints.down('md')]: { paddingTop: theme.spacing(11) },
    [theme.breakpoints.down('sm')]: { paddingTop: theme.spacing(11.5) },
  },
  copy: { maxWidth: 860, animation: '$copyReveal 700ms ease-out 100ms both', '@media (prefers-reduced-motion: reduce)': { animation: 'none' } },
  eyebrow: {
    display: 'inline-flex', alignItems: 'center', gap: theme.spacing(1.2), marginBottom: theme.spacing(2.5),
    color: theme.palette.primary.light, fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
    '&:before': { content: '""', width: 42, height: 3, borderRadius: 2, background: theme.palette.secondary.main },
  },
  title: {
    maxWidth: 760, marginBottom: theme.spacing(3), color: theme.palette.common.white,
    fontSize: 'clamp(2.8rem, 5.2vw, 4.8rem)', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.045em', textWrap: 'balance',
    [theme.breakpoints.down('sm')]: { fontSize: 'clamp(2.45rem, 11.5vw, 3.55rem)', lineHeight: 1.03 },
  },
  subtitle: { maxWidth: 650, margin: 0, color: 'rgba(255,255,255,0.84)', fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', lineHeight: 1.75 },
  actions: { marginTop: theme.spacing(4) },
  primaryAction: {
    minHeight: 54, padding: theme.spacing(1.45, 3.4), borderRadius: 10, fontWeight: 700,
    boxShadow: `0 14px 32px ${alpha(theme.palette.secondary.main, 0.3)}`,
  },
  secondaryAction: {
    minHeight: 54, padding: theme.spacing(1.45, 2.7), color: theme.palette.common.white,
    borderColor: 'rgba(255,255,255,0.62)', borderRadius: 10, fontWeight: 600,
    '&:hover': { color: theme.palette.common.white, borderColor: theme.palette.primary.main, background: alpha(theme.palette.primary.main, 0.14) },
  },
  proofPoints: {
    display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', alignItems: 'center',
    gap: theme.spacing(2), marginTop: theme.spacing(4),
    color: 'rgba(255,255,255,0.82)', fontSize: 11, fontWeight: 600,
    '& span': { display: 'inline-flex', alignItems: 'center', gap: theme.spacing(0.65), whiteSpace: 'nowrap' },
    '& svg': { flexShrink: 0, color: theme.palette.primary.main, fontSize: 17 },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, max-content))',
      gap: theme.spacing(1.5, 3),
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gap: theme.spacing(1.25),
      '& span': { whiteSpace: 'normal' },
    },
  },
  scrollCue: {
    position: 'absolute', zIndex: 2, left: '50%', bottom: 22, display: 'flex', alignItems: 'center', gap: theme.spacing(1),
    color: 'rgba(255,255,255,0.72)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textDecoration: 'none', textTransform: 'uppercase', transform: 'translateX(-50%)',
    '& svg': { fontSize: 16 }, [theme.breakpoints.down('sm')]: { display: 'none' },
  },
  '@keyframes heroReveal': { from: { opacity: 0, transform: 'scale(1.045)' }, to: { opacity: 1, transform: 'scale(1.01)' } },
  '@keyframes copyReveal': { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
}));

export default bannerStyles;
