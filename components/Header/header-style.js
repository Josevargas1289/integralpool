import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  fixed: {}, invert: {}, active: {},
  header: {
    top: 0, zIndex: 1300, color: theme.palette.common.white,
    background: 'linear-gradient(180deg, rgba(5,31,56,0.62), rgba(5,31,56,0.12))',
    boxShadow: 'none', pointerEvents: 'none',
    transition: 'background 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
    [`&.${classes.fixed}, &.${classes.invert}`]: {
      color: theme.palette.text.primary,
      background: alpha(theme.palette.background.paper, 0.96),
      borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
      boxShadow: `0 8px 28px ${alpha(theme.palette.common.black, 0.11)}`,
      backdropFilter: 'blur(16px)',
      [`& .${classes.logoLink}, & .${classes.navMenu} a, & .${classes.phone}`]: { color: theme.palette.text.primary },
      [`& .${classes.navMenu} ul`]: { background: alpha(theme.palette.primary.main, 0.055), borderColor: alpha(theme.palette.primary.main, 0.12) },
      [`& .${classes.utilityButton}, & .${classes.languageButton}`]: {
        color: theme.palette.text.primary, borderColor: alpha(theme.palette.text.primary, 0.13), background: alpha(theme.palette.primary.main, 0.055),
      },
      [`& .${classes.bar}`]: {
        backgroundColor: `${theme.palette.text.primary} !important`,
        '&:after, &:before': { backgroundColor: `${theme.palette.text.primary} !important` },
      },
    },
  },
  headerInner: {
    pointerEvents: 'auto', minHeight: 82, marginTop: 0, padding: `8px ${theme.spacing(1.25)} !important`,
    display: 'flex !important', alignItems: 'center', justifyContent: 'space-between', gap: theme.spacing(1.5),
    color: theme.palette.common.white, background: 'transparent',
    [theme.breakpoints.down('md')]: { minHeight: 70, padding: `5px ${theme.spacing(1)} !important` },
  },
  logoRow: { display: 'flex', alignItems: 'center', flexShrink: 0 },
  logoLink: {
    display: 'flex', alignItems: 'center', gap: theme.spacing(1), padding: '0 7px', color: theme.palette.common.white, textDecoration: 'none',
    '& img': { width: 45, height: 45, objectFit: 'contain', filter: 'drop-shadow(0 3px 9px rgba(0,0,0,0.18))', [theme.breakpoints.down('sm')]: { width: 40, height: 40 } },
  },
  brandText: { fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', whiteSpace: 'nowrap', [theme.breakpoints.down('sm')]: { fontSize: 14 } },
  navMenu: {
    flex: 1, display: 'flex', justifyContent: 'center',
    '& ul': {
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, padding: 4, margin: 0,
      listStyle: 'none', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, background: 'rgba(255,255,255,0.055)',
    },
    '& a': {
      position: 'relative', minWidth: 0, minHeight: 36, padding: theme.spacing(0.8, 1.25), color: theme.palette.common.white,
      fontSize: 11.5, fontWeight: 600, letterSpacing: '0.025em', textTransform: 'none', borderRadius: 10,
      '&:after': { content: '""', position: 'absolute', left: '50%', right: '50%', bottom: 3, height: 2, borderRadius: 2, background: theme.palette.primary.main, transition: 'left 180ms ease, right 180ms ease' },
      '&:hover': { color: theme.palette.primary.main, background: alpha(theme.palette.primary.main, 0.09), '&:after': { left: 12, right: 12 } },
    },
  },
  actions: {
    position: 'relative', display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0, paddingLeft: theme.spacing(1.25),
    '&:before': { content: '""', position: 'absolute', left: 0, width: 1, height: 30, background: 'currentColor', opacity: 0.14 },
    [theme.breakpoints.down('md')]: { paddingLeft: 0, '&:before': { display: 'none' } },
  },
  phone: {
    display: 'flex', alignItems: 'center', gap: 7, paddingRight: 3, color: theme.palette.common.white, textDecoration: 'none',
    fontSize: 11.5, fontWeight: 600, lineHeight: 1.1,
    '& svg': { color: theme.palette.primary.main, fontSize: 20 }, '& span': { display: 'flex', flexDirection: 'column' },
    '& small': { marginBottom: 3, fontSize: 8.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.68 },
  },
  contactButton: {
    minHeight: 40, paddingLeft: theme.spacing(1.7), paddingRight: theme.spacing(1.7), borderRadius: 12, fontSize: 11.5, fontWeight: 700,
    boxShadow: `0 8px 20px ${alpha(theme.palette.secondary.main, 0.24)}`, [theme.breakpoints.down('sm')]: { display: 'none' },
  },
  setting: { display: 'flex', alignItems: 'center', gap: 5 },
  utilityButton: {
    width: 38, height: 38, color: theme.palette.common.white, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)',
    '& svg': { fontSize: 19 }, '&:hover': { color: theme.palette.primary.main, borderColor: alpha(theme.palette.primary.main, 0.55), background: alpha(theme.palette.primary.main, 0.13) },
  },
  languageButton: {
    height: 38, display: 'inline-flex', alignItems: 'center', gap: 5, padding: '0 8px', color: theme.palette.common.white,
    fontFamily: 'inherit', fontSize: 11, fontWeight: 700, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 19,
    background: 'rgba(255,255,255,0.07)', cursor: 'pointer',
    '& svg': { width: 15, height: 15 }, '&:hover': { borderColor: theme.palette.primary.main, background: alpha(theme.palette.primary.main, 0.13) },
    [`&.${classes.active}`]: { borderColor: theme.palette.primary.main },
    [theme.breakpoints.down('sm')]: { '& > span:nth-of-type(2), & svg': { display: 'none' }, width: 38, justifyContent: 'center', padding: 0 },
  },
  flagEmoji: { fontSize: 18, lineHeight: 1 },
  mobileMenu: {
    marginRight: 2,
    color: theme.palette.common.white,
    background: 'transparent',
    '&:hover': { background: 'transparent' },
  },
  bar: { backgroundColor: '#FFFFFF !important', '&:after, &:before': { backgroundColor: '#FFFFFF !important' } },
  icon: {}, langMenu: { minWidth: 230, paddingBottom: theme.spacing(1), '& .MuiListItemIcon-root': { minWidth: 42, fontSize: 23 } }, modeMenu: {}, openDrawer: {},
  paperNav: {
    width: 'min(100vw, 420px)', maxWidth: 'none', height: '100dvh', overflow: 'hidden',
    color: theme.palette.text.primary, background: theme.palette.background.paper, backgroundImage: 'none',
  },
  mobileNav: {
    position: 'relative', minHeight: '100dvh', height: '100dvh', display: 'flex', flexDirection: 'column',
    overflow: 'hidden', background: theme.palette.background.paper,
    '&:after': { content: '""', position: 'absolute', zIndex: 0, width: 280, height: 280, right: -190, top: 120, borderRadius: '50%', border: `1px solid ${alpha(theme.palette.primary.main, 0.13)}`, boxShadow: `0 0 0 55px ${alpha(theme.palette.primary.main, 0.025)}` },
  },
  mobileDrawerHeader: {
    position: 'relative', zIndex: 2, minHeight: 78, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: theme.spacing(1.25, 2.5), borderBottom: `1px solid ${theme.palette.divider}`, background: alpha(theme.palette.background.paper, 0.96),
  },
  mobileBrand: {
    display: 'flex', alignItems: 'center', gap: theme.spacing(1.25), color: theme.palette.text.primary, textDecoration: 'none',
    '& img': { width: 48, height: 48, objectFit: 'contain' }, '& span': { fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' },
  },
  closeMenu: { width: 42, height: 42, color: theme.palette.text.primary, border: `1px solid ${theme.palette.divider}`, background: alpha(theme.palette.primary.main, 0.055) },
  mobileMenuBody: {
    position: 'relative', zIndex: 1, flex: 1, minHeight: 0, overflowY: 'auto', padding: theme.spacing(3.5, 3, 2.5),
    '& .MuiList-root': { marginTop: 0 },
  },
  mobileMenuItem: {
    minHeight: 58, padding: theme.spacing(1.15, 0), color: theme.palette.text.primary, borderBottom: `1px solid ${theme.palette.divider}`,
    '&:hover': { background: 'transparent', color: theme.palette.primary.dark },
  },
  menuList: { '& span': { fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em' } },
  menuArrow: { width: 20, height: 20, color: theme.palette.primary.main },
  mobileDrawerFooter: {
    position: 'relative', zIndex: 2, padding: theme.spacing(2, 2.5, 2.25), borderTop: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.default,
  },
  mobileContactRow: {
    display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: theme.spacing(1), marginTop: theme.spacing(1.25), marginBottom: theme.spacing(1.25),
    '& a': { minWidth: 0, minHeight: 48, display: 'flex', alignItems: 'center', gap: 7, padding: theme.spacing(0.75, 1), color: theme.palette.text.primary, fontSize: 10.5, fontWeight: 600, textDecoration: 'none', border: `1px solid ${theme.palette.divider}`, borderRadius: 10, background: theme.palette.background.paper },
    '& svg': { flexShrink: 0, color: theme.palette.primary.main, fontSize: 19 },
    '& span': { minWidth: 0, display: 'flex', flexDirection: 'column', overflowWrap: 'anywhere' },
    '& small': { marginBottom: 3, color: theme.palette.text.secondary, fontSize: 8, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' },
  },
  mobileContactButton: { width: '100%', minHeight: 46, borderRadius: 10, fontWeight: 700 },
  mobileFooterBottom: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: theme.spacing(2), marginTop: theme.spacing(1.5),
    '& > small': { color: theme.palette.text.secondary, fontSize: 10 },
  },
  socialWrapper: {
    display: 'flex', alignItems: 'center', gap: theme.spacing(1.5),
    '& a': { display: 'grid', placeItems: 'center', width: 30, height: 30, color: theme.palette.text.secondary, textDecoration: 'none', borderRadius: '50%', border: `1px solid ${theme.palette.divider}` },
  },
  dividerSidebar: {}, menu: {}, menuOpen: {}, margin: {}, phoneLink: {}, logo: {}, headerTop: {}, userMenu: {}, divider: {}, navigation: {}, button: {},}));

export default headerStyles;
