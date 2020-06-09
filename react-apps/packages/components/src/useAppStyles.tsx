import { makeStyles } from '@material-ui/core'

export default makeStyles(
  {
    p: {
      fontFamily: 'Gotham',
      fontWeight: 400,
      textAlign: 'left',
      fontSize: 22,
      color: 'var(--secondary)',
      '@media only screen and (max-width : 800px)': {
        fontSize: 16,
        lineHeight: '24px',
      },
      lineHeight: 1.25,
      margin: '25px 0 0',
    },
    link: {
      fontFamily: 'Gotham',
      fontWeight: 400,
      textAlign: 'left',
      color: 'var(--primary)',
      textDecoration: 'none',
      width: '100%',
      fontSize: '18px',
      lineHeight: 1.5,
      '@media only screen and (max-width : 500px)': {
        fontSize: '16px',
      },
      cursor: 'pointer',
    },
    mobileAlignBottom: {
      width: '100%',
      marginBottom: '16px',
      marginTop: 'auto',
      paddingTop: '40px',
    },
    authCardContainer: {
      '@media only screen and (min-width : 800px)': {
        height: '100%',
        padding: '0px 70px',
        boxShadow: '0px 2px 20px rgba(20, 39, 60, 0.1)',
        borderRadius: '2px',
        marginTop: '48px',
        marginBottom: '20px',
        backgroundColor: 'white',
        zIndex: 999,
      },
    },
    titleDisplay: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      fontSize: '56px',
      lineHeight: 1.125,
      fontWeight: 700,
      color: 'var(--secondary)',
      '@media only screen and (max-width : 500px)': {
        fontSize: '40px',
      },

      marginTop: '60px',
      marginBottom: '20px',
    },
    title: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      fontSize: '36px',
      lineHeight: 1.3,
      fontWeight: 700,
      color: 'var(--secondary)',
      '@media only screen and (max-width : 500px)': {
        fontSize: '26px',
      },

      marginTop: '72px',
      marginBottom: '20px',
    },
    smallTitle: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      letterSpacing: '-0.42353px',
      fontSize: '25px',
      lineHeight: 1.3,
      fontWeight: 900,
      color: 'var(--secondary)',
      '@media only screen and (max-width : 500px)': {
        fontSize: '18px',
      },
    },
    romanTitle: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      fontSize: '25px',
      lineHeight: 1.3,
      fontWeight: 900,
      color: 'var(--gray-dark)',
      '@media only screen and (max-width : 500px)': {
        fontSize: '18px',
      },
    },
    advice: {
      width: '100%',
      fontFamily: 'Gotham',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: '10px',
      textAlign: 'center',
      color: 'var(--cool-gray)',
      lineHeight: 1.25,
      fontSize: 16,
      '@media only screen and (max-width : 758px)': {
        fontSize: 14,
      },
      margin: '10px 0 0',
    },
    text: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 400,
      color: 'var(--secondary)',
      '@media only screen and (max-width : 500px)': {
        fontSize: '16px',
      },
    },
    textLight: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 400,
      color: 'var(--gray-dark)',
      '@media only screen and (max-width : 500px)': {
        fontSize: '16px',
      },
    },
    label: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 900,
      color: 'var(--cool-gray)',
      '@media only screen and (max-width : 500px)': {
        fontSize: '14px',
      },
    },
    formControl: {
      width: '100%',
      margin: '20px 0px',
    },
    formLabel: {
      width: '100%',
      fontFamily: 'Gotham',
      textAlign: 'left',

      fontSize: '21px',
      lineHeight: 1.25,
      fontWeight: 400,
      color: 'var(--secondary) !important',
      // margin: '35px 0 0',
      '@media only screen and (max-width : 758px)': {
        fontSize: '18px',
      },
    },
    hola: {
      fontWeight: 900,
      transform: 'rotate(-90deg)',
      position: 'absolute',
      left: '-40%',
      bottom: '350px',
      fontSize: '218px',
      color: 'var(--gray-light)',
      userSelect: 'none',
      '@media only screen and (max-width : 950px)': {
        display: 'none',
      },
    },
    errorMobile: {
      '@media only screen and (max-width : 437px)': {
        // marginLeft: '24px',
        // marginRight: '24px',
      },
    },
  },
  {
    index: 9,
  }
)
