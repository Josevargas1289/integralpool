import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const benefitStyles = makeStyles({ uniqId: 'benefit' })(theme => ({
  root: {
    position: 'relative', padding: theme.spacing(13, 0), overflow: 'hidden', background: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: { padding: theme.spacing(9, 0) },
  },
  desc: {
    position: 'relative', zIndex: 1,
    '& h2': { fontSize: 'clamp(2.25rem, 4.2vw, 3.8rem)', lineHeight: 1.06, letterSpacing: '-0.035em' },
    '& p': { margin: theme.spacing(3, 0, 4), color: theme.palette.text.secondary, fontSize: 16, lineHeight: 1.8 },
    '& a': { minHeight: 48, padding: theme.spacing(1.2, 2.7), borderRadius: 10, fontWeight: 700 },
  },
  logoGrid: { position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: theme.spacing(2), [theme.breakpoints.down('sm')]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: theme.spacing(1) } },
  logoItem: {
    minHeight: 155, display: 'grid', placeItems: 'center', padding: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`, borderRadius: 14, background: theme.palette.mode === 'dark' ? '#F7FAFC' : theme.palette.background.paper,
    transition: 'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
    '&:hover': { transform: 'translateY(-4px)', borderColor: alpha(theme.palette.primary.main, 0.55), boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.11)}` },
    '&:hover img': { filter: 'grayscale(0%)', opacity: 1, transform: 'scale(1.035)' },
    [theme.breakpoints.down('sm')]: { minHeight: 115, padding: theme.spacing(2) },
  },
  logoImage: { maxWidth: '82%', maxHeight: 64, width: 'auto', filter: 'grayscale(100%)', opacity: 0.68, transition: 'filter 220ms ease, opacity 220ms ease, transform 220ms ease' },
  wrapper: {}, carouselWrapper: {}, list: {},
}));

export default benefitStyles;