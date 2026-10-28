import { alpha } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  const isDark = theme.palette.mode === 'dark';
  const poolBlue = '#173BFF';
  const poolCyan = '#24C7D5';

  return {
    modalRoot: {
      display: 'grid',
      placeItems: 'center',
      padding: theme.spacing(2),
      '& .MuiBackdrop-root': {
        backgroundColor: isDark ? 'rgba(1, 9, 20, 0.78)' : 'rgba(7, 25, 42, 0.68)',
        backdropFilter: 'blur(7px)',
      },
    },
    modalPaper: {
      position: 'relative',
      width: 'min(940px, calc(100vw - 32px))',
      maxHeight: 'min(86vh, 780px)',
      display: 'grid',
      gridTemplateRows: 'auto minmax(0, 1fr) auto',
      overflow: 'hidden',
      outline: 'none',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid ' + alpha(isDark ? '#FFFFFF' : poolBlue, isDark ? 0.14 : 0.1),
      borderRadius: 26,
      boxShadow: isDark
        ? '0 32px 80px rgba(0, 0, 0, 0.58)'
        : '0 32px 80px rgba(11, 44, 70, 0.25)',
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100vw - 24px)',
        maxHeight: 'calc(100dvh - 24px)',
        borderRadius: 20,
      },
    },
    accentLine: {
      position: 'absolute',
      inset: '0 0 auto 0',
      zIndex: 2,
      height: 5,
      background: 'linear-gradient(90deg, ' + poolBlue + ' 0%, ' + poolCyan + ' 100%)',
    },
    modalHeader: {
      minHeight: 104,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing(2),
      padding: theme.spacing(3, 3.5, 2.5),
      background: isDark
        ? 'linear-gradient(135deg, ' + alpha('#FFFFFF', 0.035) + ', ' + alpha(poolBlue, 0.07) + ')'
        : 'linear-gradient(135deg, #FFFFFF, ' + alpha(poolCyan, 0.055) + ')',
      borderBottom: '1px solid ' + alpha(theme.palette.text.primary, 0.09),
      [theme.breakpoints.down('sm')]: {
        minHeight: 88,
        padding: theme.spacing(2.5, 2, 2),
      },
    },
    modalIdentity: {
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1.75),
    },
    brandLogo: {
      flex: '0 0 auto',
      width: 52,
      height: 52,
      objectFit: 'contain',
      filter: isDark ? 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.32))' : 'drop-shadow(0 8px 16px rgba(23, 59, 255, 0.14))',
      [theme.breakpoints.down('sm')]: {
        width: 44,
        height: 44,
      },
    },    eyebrow: {
      display: 'block',
      marginBottom: 2,
      color: poolCyan,
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '0.16em',
      lineHeight: 1.2,
      textTransform: 'uppercase',
    },
    modalTitle: {
      color: theme.palette.text.primary,
      fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
      fontWeight: 750,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    closeButton: {
      flex: '0 0 auto',
      width: 44,
      height: 44,
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.background.paper, isDark ? 0.72 : 0.84),
      border: '1px solid ' + alpha(theme.palette.text.primary, 0.12),
      transition: 'transform 180ms ease, background-color 180ms ease, color 180ms ease',
      '&:hover': {
        color: '#FFFFFF',
        backgroundColor: poolBlue,
        transform: 'rotate(6deg)',
      },
    },
    modalBody: {
      minHeight: 0,
      overflowY: 'auto',
      padding: theme.spacing(3.5),
      scrollbarWidth: 'thin',
      scrollbarColor: alpha(poolCyan, 0.65) + ' transparent',
      '&::-webkit-scrollbar': { width: 7 },
      '&::-webkit-scrollbar-track': { background: 'transparent' },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: alpha(poolCyan, 0.58),
        borderRadius: 10,
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
      },
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: theme.spacing(2.25),
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
      },
    },
    section: {
      position: 'relative',
      minWidth: 0,
      margin: 0,
      padding: theme.spacing(3),
      overflow: 'hidden',
      backgroundColor: isDark ? alpha('#FFFFFF', 0.035) : '#FFFFFF',
      border: '1px solid ' + alpha(theme.palette.text.primary, isDark ? 0.13 : 0.09),
      borderRadius: 20,
      boxShadow: isDark ? 'none' : '0 16px 38px rgba(17, 48, 73, 0.07)',
      '&::after': {
        content: '""',
        position: 'absolute',
        right: -42,
        bottom: -52,
        width: 145,
        height: 145,
        borderRadius: '50%',
        pointerEvents: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2.25),
        borderRadius: 17,
      },
    },
    visionCard: {
      borderTop: '3px solid ' + poolBlue,
      '&::after': { backgroundColor: alpha(poolBlue, isDark ? 0.09 : 0.045) },
    },
    missionCard: {
      borderTop: '3px solid ' + poolCyan,
      '&::after': { backgroundColor: alpha(poolCyan, isDark ? 0.1 : 0.06) },
    },
    singleSection: {
      maxWidth: 760,
      margin: '0 auto',
      borderTop: '3px solid ' + poolCyan,
      '&::after': { backgroundColor: alpha(poolCyan, isDark ? 0.1 : 0.06) },
    },
    cardHeading: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1.5),
      marginBottom: theme.spacing(2.25),
    },
    cardIcon: {
      flex: '0 0 auto',
      width: 50,
      height: 50,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 15,
      '& svg': { fontSize: 25 },
    },
    visionIcon: {
      color: poolBlue,
      backgroundColor: alpha(poolBlue, isDark ? 0.16 : 0.09),
    },
    missionIcon: {
      color: isDark ? '#51E0EA' : '#049FAE',
      backgroundColor: alpha(poolCyan, isDark ? 0.16 : 0.12),
    },
    sectionTitle: {
      color: theme.palette.text.primary,
      fontSize: 'clamp(1.45rem, 2.5vw, 1.8rem)',
      fontWeight: 750,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    sectionText: {
      position: 'relative',
      zIndex: 1,
      margin: 0,
      color: theme.palette.text.secondary,
      fontSize: 'clamp(0.94rem, 1.35vw, 1.02rem)',
      fontWeight: 400,
      lineHeight: 1.72,
    },
    modalFooter: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2.5),
      padding: theme.spacing(2.25, 3.5, 2.5),
      borderTop: '1px solid ' + alpha(theme.palette.text.primary, 0.09),
      backgroundColor: isDark ? alpha('#000000', 0.12) : alpha('#F4FBFC', 0.66),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1.75, 2, 2),
      },
    },
    footerLine: {
      height: 1,
      flex: 1,
      background: 'linear-gradient(90deg, ' + alpha(poolBlue, 0.08) + ', ' + alpha(poolCyan, 0.7) + ')',
    },
    closeAction: {
      minWidth: 132,
      minHeight: 46,
      borderRadius: 12,
      fontWeight: 800,
      boxShadow: '0 10px 22px ' + alpha(poolCyan, 0.22),
      [theme.breakpoints.down('sm')]: {
        minWidth: 118,
      },
    },
    alignLeft: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 0,
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
    triggerButton: {
      minHeight: 48,
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      borderRadius: 10,
      fontWeight: 700,
    },
    text_color: {
      color: theme.palette.text.primary,
    },
  };
});

export default useStyles;
