import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';

const contactStyles = makeStyles({ uniqId: 'contact' })((theme, _params, classes) => ({
  title: {},
  pageWrap: {
    padding: theme.spacing(11, 5),
    position: 'relative',
    textAlign: 'center',
    background: 'repeat-x center 126%',
    backgroundImage: theme.palette.mode === 'dark' ? 'url(/images/hosting/cloud_bottom_dark.svg)' : 'url(/images/hosting/cloud_bottom_light.svg)',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 0),
    },
    [`& .${classes.title}`]: {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        fontSize: 32
      }
    },
    '& a': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  innerWrap: {
    textAlign: 'left',
  },
  fullFromWrap: {
    background: theme.palette.background.paper,
    padding: theme.spacing(9, 0),
  },
  formBox: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    background: alpha(theme.palette.background.paper, 0.7),
    boxShadow: '0 0 12px 2px rgba(0, 0, 0, 0.05)',
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    padding: theme.spacing(0, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
      fontSize: 16
    }
  },
  light: {},
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5),
    },
    '& > div': {
      overflow: 'hidden',
      background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#eeeeee',
      '&:hover': {
        background: darken(theme.palette.background.paper, 0.1)
      },
      '& input, textarea': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: theme.palette.background.default
        },
      }
    },
    [`&.${classes.light}`]: {
      '& label': {
        color: theme.palette.common.white,
      },
      '& > div': {
        border: `1px solid ${alpha(theme.palette.primary.light, 0.5)}`,
        '& input': {
          color: theme.palette.common.white,
          '&:focus': {
            background: alpha(theme.palette.text.disabled, 0.2)
          },
          '&:hover': {
            background: alpha(theme.palette.text.disabled, 0.2)
          }
        },
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 6, 10),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2, 10),
    },
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  flex: {},
  btnArea: {
    marginTop: theme.spacing(6),
    '& label': {
      position: 'relative'
    },
    '& button': {
      minWidth: 200
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      }
    },
    [`&.${classes.flex}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        display: 'block'
      }
    },
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.text.disabled
    },
    '& > span i:first-of-type': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-of-type': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1,
      },
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative',
  },
  greeting: {
    padding: theme.spacing(15, 6),
    height: '100%',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(5),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64,
      marginRight: theme.spacing()
    },
    '& p, span': {
      display: 'block',
      textTransform: 'none',
      fontSize: 24,
      paddingBottom: 4,
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  signArrow: {},
  formWrap: {
    minHeight: 760,
    background: theme.palette.background.paper,
    position: 'relative',
    paddingBottom: theme.spacing(10),
    overflow: 'hidden',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    },
    [`& .${classes.frmDeco}`]: {
      left: '58.333333%',
      transform: 'translateX(-72%)',
      bottom: '-75px'
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
      [theme.breakpoints.down('lg')]: {
        margin: theme.spacing(0, 0.5)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
        width: '100%',
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing()
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: darken('#28aae1', 0.2),
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: darken('#3b579d', 0.2),
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: darken('#dd493c', 0.2),
    }
  },
  separator: {
    margin: `${theme.spacing(5)} auto`,
    maxWidth: 340,
    minWidth: 256,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.disabled}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0,
    },
    '&:after': {
      right: 0,
    }
  },
  frmDeco: {
    bottom: -104,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 1280,
    '& svg': {
      width: 1280,
      height: 190,
      stroke: theme.palette.primary.main,
      fill: 'none'
    }
  },
  cloudDeco: {
    position: 'absolute',
    top: '-10%',
    left: 0,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    '& svg': {
      fill: theme.palette.background.paper
    }
  },
  contactPage: {
    minHeight: '100vh',
    padding: theme.spacing(12, 3, 7),
    textAlign: 'left',
    backgroundColor: theme.palette.mode === 'dark' ? '#061521' : '#F3FAFC',
    backgroundImage: theme.palette.mode === 'dark'
      ? 'radial-gradient(circle at 8% 14%, rgba(36,199,213,0.12), transparent 27%), radial-gradient(circle at 92% 86%, rgba(23,59,255,0.12), transparent 25%)'
      : 'radial-gradient(circle at 8% 14%, rgba(36,199,213,0.15), transparent 28%), radial-gradient(circle at 92% 86%, rgba(23,59,255,0.08), transparent 26%)',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: { padding: theme.spacing(3, 1.5, 4) },
  },
  contactInner: { position: 'relative', zIndex: 1 },
  contactTopbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(1.5),
  },
  contactBackButton: {
    minHeight: 42,
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.primary + ' !important',
    fontSize: '13px !important',
    fontWeight: '700 !important',
    border: '1px solid ' + alpha(theme.palette.text.primary, 0.13),
    borderRadius: '12px !important',
    backgroundColor: alpha(theme.palette.background.paper, 0.82) + ' !important',
    boxShadow: '0 8px 22px ' + alpha(theme.palette.common.black, 0.07),
    backdropFilter: 'blur(10px)',
    transition: 'transform 180ms ease, border-color 180ms ease, color 180ms ease',
    '& svg': { color: theme.palette.primary.main },
    '&:hover': {
      color: theme.palette.primary.dark + ' !important',
      borderColor: alpha(theme.palette.primary.main, 0.42),
      transform: 'translateX(-3px)',
    },
  },  contactFormBox: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 28,
    background: theme.palette.background.paper,
    border: '1px solid ' + alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.12),
    boxShadow: theme.palette.mode === 'dark' ? '0 30px 80px rgba(0,0,0,0.42)' : '0 30px 80px rgba(8,40,62,0.15)',
    [theme.breakpoints.down('sm')]: { borderRadius: 20 },
  },
  contactAccent: {
    position: 'absolute',
    inset: '0 0 auto 0',
    zIndex: 3,
    height: 5,
    background: 'linear-gradient(90deg, #173BFF, #24C7D5 72%, #FF9700)',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 0.82fr) minmax(0, 1.35fr)',
    minHeight: 650,
    [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr', minHeight: 0 },
  },
  introPanel: {
    position: 'relative',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: theme.spacing(7, 5),
    color: '#FFFFFF',
    background: 'linear-gradient(150deg, #061D30 0%, #073A50 58%, #096B76 100%)',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 240,
      height: 240,
      right: -105,
      top: -95,
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: '50%',
      boxShadow: '0 0 0 45px rgba(255,255,255,0.025), 0 0 0 90px rgba(255,255,255,0.018)',
    },
    [theme.breakpoints.down('md')]: { minHeight: 0, justifyContent: 'flex-start', padding: theme.spacing(4) },
    [theme.breakpoints.down('sm')]: { minHeight: 320, padding: theme.spacing(4.5, 3) },
  },
  formBrand: {
    position: 'absolute',
    top: 34,
    left: 38,
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(1.25),
    color: '#FFFFFF !important',
    textDecoration: 'none',
    '& img': { width: 54, height: 54, objectFit: 'contain', filter: 'drop-shadow(0 7px 14px rgba(0,0,0,0.25))' },
    '& span': { color: '#FFFFFF', fontSize: 17, fontWeight: 750, letterSpacing: '-0.02em' },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      alignSelf: 'flex-start',
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3.5),
      '& img': { width: 46, height: 46 },
      '& span': { fontSize: 15 },
    },
  },
  introKicker: {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    marginBottom: theme.spacing(1.75),
    color: '#59E3EC',
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: '0.16em',
    lineHeight: 1.3,
    textTransform: 'uppercase',
  },
  contactTitle: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 360,
    marginBottom: theme.spacing(2) + ' !important',
    color: '#FFFFFF !important',
    fontSize: 'clamp(2.25rem, 4vw, 3.5rem) !important',
    fontWeight: '750 !important',
    lineHeight: '1.05 !important',
    letterSpacing: '-0.045em',
  },
  contactDesc: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 390,
    padding: '0 !important',
    color: 'rgba(255,255,255,0.74) !important',
    fontSize: '0.98rem !important',
    lineHeight: '1.75 !important',
    textAlign: 'left !important',
  },
  contactChannels: {
    position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 8,
    marginTop: 24,
    '&& a': { width: 'fit-content', color: '#FFFFFF', fontSize: 13, fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.42)' },
    '&& a:hover, && a:focus-visible': { color: '#59E3EC', borderColor: '#59E3EC' },
  },
  rippleArt: {
    position: 'absolute',
    right: -25,
    bottom: -38,
    width: 230,
    height: 120,
    opacity: 0.32,
    '& span': {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      border: '1px solid rgba(255,255,255,0.72)',
      borderRadius: '50%',
      transform: 'translateX(-50%)',
    },
    '& span:nth-of-type(1)': { width: 205, height: 78 },
    '& span:nth-of-type(2)': { width: 142, height: 52, bottom: 13 },
    '& span:nth-of-type(3)': { width: 76, height: 27, bottom: 26 },
  },
  contactFormPanel: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 0,
    padding: theme.spacing(6, 5),
    background: theme.palette.background.paper,
    [theme.breakpoints.down('md')]: { padding: theme.spacing(5, 4) },
    [theme.breakpoints.down('sm')]: { padding: theme.spacing(3.5, 2.25) },
  },
  contactForm: { width: '100%', margin: 0, padding: '0 !important' },
  contactInput: {
    '& .MuiFilledInput-root': {
      overflow: 'hidden',
      minHeight: 62,
      border: '1px solid ' + alpha(theme.palette.text.primary, 0.13),
      borderRadius: 13,
      backgroundColor: theme.palette.mode === 'dark' ? alpha('#FFFFFF', 0.055) : '#F6F9FA',
      transition: 'border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
      '&:before, &:after': { display: 'none' },
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? alpha('#FFFFFF', 0.08) : '#F1F7F8',
        borderColor: alpha(theme.palette.primary.main, 0.5),
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.primary.main,
        boxShadow: '0 0 0 4px ' + alpha(theme.palette.primary.main, 0.11),
      },
    },
    '& .MuiFilledInput-input': { paddingTop: 25, paddingBottom: 11 },
    '& .MuiInputLabel-root': { color: theme.palette.text.secondary, fontSize: 14 },
    '& .MuiFormHelperText-root': { marginLeft: 4, marginTop: 5, fontSize: 11 },
  },
  contactBtnArea: {
    display: 'flex !important',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(4) + ' !important',
    '& .MuiFormControlLabel-root': { flex: 1, minWidth: 0, margin: 0 },
    '& .MuiFormControlLabel-label': { color: theme.palette.text.secondary, fontSize: 12, lineHeight: 1.45 },
    [theme.breakpoints.down('md')]: { alignItems: 'stretch', flexDirection: 'column' },
  },
  contactSubmit: {
    flex: '0 0 auto',
    minWidth: '180px !important',
    minHeight: 52,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    borderRadius: '13px !important',
    fontWeight: '800 !important',
    boxShadow: '0 12px 26px ' + alpha(theme.palette.secondary.main, 0.25),
  },
  dialogPaper: {
    minWidth: 0,
    maxWidth: 'calc(100vw - 32px)',
    padding: theme.spacing(1),
    borderRadius: '18px !important',
    borderTop: '4px solid ' + theme.palette.primary.main,
    boxShadow: '0 24px 60px rgba(7,31,48,0.24) !important',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
