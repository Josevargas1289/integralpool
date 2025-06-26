import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import flag from 'public/images/flag-logo.png';


const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  openDrawer: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.4)}`,
    top: 0,
    transition: 'all 0.3s ease',
    zIndex: 20,
    '& .MuiContainer-root': {
      padding: 0
    },
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 0
      }
    },
    [`&.${classes.fixed}`]: {
      [`& .${classes.navigation}`]: {
        background: theme.palette.background.paper
      },
      [theme.breakpoints.up('md')]: {
        top: theme.spacing(-7),
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
    }
  },
  logo: {
    display: 'flex',
    '& a': {
      textDecoration: 'none',
      fontSize: 26,
      alignItems: 'center',
      display: 'flex',
      color: theme.palette.text.secondary
    },
    '& img': {
      position: 'relative',
      height: 48,
      marginRight: theme.spacing(),
    },
  },
  headerTop: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 1),
    },
    '& .MuiContainer-root': {
      justifyContent: 'space-between',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        padding: 0
      },
    }
  },
  userMenu: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary,
    '& > *': {
      margin: theme.spacing(0, 1.5)
    },
    '& > .MuiButton-root': {
      margin: theme.spacing(0, 0.5)
    }
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    marginLeft: theme.spacing(3),
    height: 28
  },
  dividerSidebar: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(3, 0),
  },
  navigation: {
  display: 'flex',
  justifyContent: 'center', // <-- centra horizontalmente
  background: alpha(theme.palette.background.paper, 0.7),
  '& nav': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing()
  }
},

  active: {},
  button: {
    width: theme.spacing(15)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& a': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      [`&.${classes.icon}`]: {
        color: theme.palette.text.secondary,
      }
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 2),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          '&:hover': {
            transition: 'all 0.3s ease-out',
            opacity: 0.5,
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.primary.main,
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  modeMenu: {
    textTransform: 'capitalize',
  },
  icon: {
    color: theme.palette.text.secondary,
  },
  setting: {
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: 130,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }, 
  socialWrapper: {
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem 0',
  
},
brandText: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 900,
  fontSize: '1.5rem',
  color: '#03589A',
  padding: '1rem 0',
  textAlign: 'center',
  
}

}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
