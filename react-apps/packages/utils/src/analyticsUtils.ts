import ReactGA from 'react-ga'

type LoginService = 'email' | 'facebook' | 'google'
type ShareService = 'whatsapp' | 'twitter' | 'facebook'

const visitLoginAB = (ab: 'A' | 'B') => () =>
  ReactGA.event({
    category: 'Auth',
    action: `Visit Login${ab}`,
    label: `A/B Testing Login`,
  })

const succesLoginAB = (ab: 'A' | 'B') => () =>
  ReactGA.event({
    category: 'Auth',
    action: `Success Login${ab}`,
    label: `A/B Testing Login`,
  })

const capitalizeFirst = (x: string) =>
  `${x.charAt(0).toUpperCase()}${x.slice(1, x.length)}`

export default {
  INITIALIZE: (api_key: string) => {
    ReactGA.initialize(api_key)
  },
  REGISTER_VISIT: (location: string) => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Visited',
      label: location,
    })
  },
  REGISTER_LEFT: (location: string) => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Left',
      label: location,
    })
  },
  VISIT_LOGIN_A: visitLoginAB('A'),
  VISIT_LOGIN_B: visitLoginAB('B'),
  SUCCESS_LOGIN_A: succesLoginAB('A'),
  SUCCESS_LOGIN_B: succesLoginAB('B'),
  SUCCESS_SERVICE: (service: LoginService) =>
    ReactGA.event({
      category: 'Login Service',
      action: `Success ${capitalizeFirst(service)}`,
    }),
  ERROR_SERVICE: (service: LoginService, extra: string = '') =>
    ReactGA.event({
      category: 'Login Service',
      action: `Error ${capitalizeFirst(service)} ${extra}`,
    }),
  CLICK_SERVICE: (service: LoginService) =>
    ReactGA.event({
      category: 'Login Service',
      action: `Click ${service}`,
    }),
  CLICK_SHARE: (service: ShareService) =>
    ReactGA.event({
      category: 'Share',
      action: `Click ${service}`,
    }),
  VISIT_BY_SHARE: (service: ShareService) =>
    ReactGA.event({
      category: 'Share',
      action: `Visit by ${service}`,
    }),
  EXPERIMENT_COMPLETE: (login_fork: 'A' | 'B') =>
    ReactGA.event({
      category: 'Experiment',
      action: `Complete ${login_fork}`,
    }),
  CLICK_RECOMENDACION: (recomendado: string) =>
    ReactGA.event({
      category: 'Click Recomendado',
      action: `Click ${recomendado}`,
    }),
  EVENT: (args: ReactGA.EventArgs) => ReactGA.event(args),
}
