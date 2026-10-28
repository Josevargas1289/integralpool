import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'mediaGallery' })(theme => ({
  root: {
    position: 'relative', padding: theme.spacing(13, 0), background: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: { padding: theme.spacing(9, 0) },
  },
  heading: {
    maxWidth: 760, margin: `0 auto ${theme.spacing(6)}`, textAlign: 'center',
    '& h2': { fontSize: 'clamp(2.35rem, 4.6vw, 4rem)', lineHeight: 1.06, letterSpacing: '-0.035em' },
    '& > p': { maxWidth: 650, margin: `${theme.spacing(2.5)} auto 0`, color: theme.palette.text.secondary, fontSize: 16, lineHeight: 1.75 },
  },
  projectGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
    [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr', gap: theme.spacing(1.5) },
  },
  project: {
    position: 'relative', aspectRatio: '4 / 3', margin: 0, overflow: 'hidden', borderRadius: 14,
    background: alpha(theme.palette.primary.main, 0.1), boxShadow: `0 12px 30px ${alpha(theme.palette.common.black, 0.08)}`,
    '&:after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 48%, rgba(3,25,46,0.78) 100%)', pointerEvents: 'none' },
    '&:hover img': { transform: 'scale(1.045)' },
    '@media (prefers-reduced-motion: reduce)': { '& img': { transition: 'none' }, '&:hover img': { transform: 'none' } },
  },
  projectButton: {
    display: 'block', width: '100%', height: '100%', padding: 0, border: 0, background: 'none', cursor: 'pointer', textAlign: 'left',
    '& > img': { width: '100%', height: '100%', display: 'block', objectFit: 'cover', transition: 'transform 500ms cubic-bezier(0.2,0.7,0.2,1)' },
    '&:focus-visible': { outline: `3px solid ${theme.palette.secondary.main}`, outlineOffset: -3 },
  },
  projectCaption: {
    position: 'absolute', zIndex: 2, left: theme.spacing(2.25), right: theme.spacing(2.25), bottom: theme.spacing(2),
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', color: theme.palette.common.white,
    '& > span': { minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 },
    '& small': { color: theme.palette.primary.light, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' },
    '& strong': { fontSize: 16, fontWeight: 700, overflowWrap: 'anywhere' }, '& svg': { flexShrink: 0, fontSize: 21 },
  },
  galleryAction: {
    display: 'flex', justifyContent: 'center', marginTop: theme.spacing(5),
    '& a': { maxWidth: '100%', minHeight: 50, padding: theme.spacing(1.2, 3), borderRadius: 10, fontWeight: 700, whiteSpace: 'normal', textAlign: 'center', borderColor: alpha(theme.palette.primary.main, 0.65) },
  },
  dialogTitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: theme.spacing(2),
    fontWeight: 700,
    '& > span': { minWidth: 0, overflowWrap: 'anywhere' },
    '& > button': { flexShrink: 0 },
  },
  projectRegion: { marginBottom: theme.spacing(1.5), color: theme.palette.text.secondary, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' },
  detailImage: { display: 'block', width: '100%', height: 'auto', maxHeight: 550, objectFit: 'contain', borderRadius: 10, background: alpha(theme.palette.primary.main, 0.08) },
  thumbnailRow: {
    display: 'flex', gap: theme.spacing(1), overflowX: 'auto', padding: theme.spacing(1.5, 0),
    '& button': { width: 76, height: 58, padding: 0, flexShrink: 0, overflow: 'hidden', border: `2px solid ${theme.palette.divider}`, borderRadius: 7, background: 'none', cursor: 'pointer' },
    '& button:focus-visible': { outline: `3px solid ${theme.palette.secondary.main}` },
    '& img': { width: '100%', height: '100%', objectFit: 'cover' },
  },
  activeThumbnail: { borderColor: `${theme.palette.primary.main} !important` },
  projectDescription: { margin: theme.spacing(1, 0, 3), color: theme.palette.text.secondary, lineHeight: 1.75 },
  conceptSection: { marginTop: theme.spacing(11), paddingTop: theme.spacing(7), borderTop: `1px solid ${theme.palette.divider}` },
  conceptTitle: { textAlign: 'center', color: theme.palette.text.primary, fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: 700 },
  conceptIntro: { maxWidth: 690, margin: `${theme.spacing(2)} auto ${theme.spacing(4)}`, textAlign: 'center', color: theme.palette.text.secondary, lineHeight: 1.7 },
  conceptGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
  },
  conceptCard: { overflow: 'hidden', border: `1px solid ${theme.palette.divider}`, borderRadius: 14, background: theme.palette.background.default },
  conceptImage: {
    position: 'relative', display: 'block', lineHeight: 0,
    '& img': { display: 'block', width: '100%', height: 'auto' },
    '& img:nth-of-type(2)': { display: 'none' },
    [theme.breakpoints.down('sm')]: {
      '& img': { aspectRatio: '4 / 3', objectFit: 'cover' },
      '& img:nth-of-type(1)': { objectPosition: 'left center' },
      '& img:nth-of-type(2)': { display: 'block', objectPosition: 'right center' },
    },
  },
  beforeLabel: { position: 'absolute', bottom: 10, left: '25%', transform: 'translateX(-50%)', padding: '5px 10px', color: '#fff', background: 'rgba(3,25,46,0.8)', borderRadius: 5, fontSize: 11, fontWeight: 700, lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: { top: 12, bottom: 'auto', left: 12, transform: 'none' },
  },
  afterLabel: { position: 'absolute', bottom: 10, left: '75%', transform: 'translateX(-50%)', padding: '5px 10px', color: '#fff', background: 'rgba(3,25,46,0.8)', borderRadius: 5, fontSize: 11, fontWeight: 700, lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: { bottom: 12, left: 12, transform: 'none' },
  },
  conceptMeta: {
    display: 'flex', flexDirection: 'column', gap: 4, padding: theme.spacing(2),
    '& strong': { color: theme.palette.text.primary, fontSize: 15 },
    '& span': { color: theme.palette.text.secondary, fontSize: 12, lineHeight: 1.5 },
  },
}));

export default useStyles;