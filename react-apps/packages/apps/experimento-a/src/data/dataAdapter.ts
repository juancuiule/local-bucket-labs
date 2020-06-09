import { AppContextData } from '../contexts/AppContext'
import { Config } from './config'

export const fullData = (
  appContext: AppContextData,
  extras: Array<object> = []
) => {
  return {
    ...experiment(Config.EXPERIMENT_SLUG, appContext, extras),
    ...bakgroundData(appContext),
  }
}
const experiment = (
  slug: string,
  appContext: AppContextData,
  extras: Array<object> = []
) => {
  return {
    experiment: {
      experiment_slug: slug,
      experiment_content: experimentContent(appContext, extras),
    },
  }
}

const experimentContent = (
  appContext: AppContextData,
  extras: Array<object> = []
) => {
  return {
    answers: [],
  }
}

const bakgroundData = (appContext: AppContextData) => {
  const { experiment } = appContext
  const { edad, nivelEducativo } = experiment!.preguntas!
  return {
    user: [{ edad }, { nivelEducativo }],
  }
}
