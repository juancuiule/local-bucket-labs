import { handleGet, handlePost, handlePut } from './api'

type ExperimentDataResponse = {
  data: {
    id: number
  }
}

type ExperimentData = {
  experiment: {
    experiment_slug: string
    experiment_content: object
  }
  user: object
}

type SubmitExtraDataRequest = {
  id: number
  token: string
  data: ExperimentData
}

class LabsAPI {
  LABS_API_URL: string
  EXPERIMENT_SLUG: string
  GET: <U>(path: string, token?: string) => Promise<U>
  POST: <T, U>(
    path: string
  ) => (bodyData: T, extraHeaders?: HeadersInit) => Promise<U>
  PUT: <T, U>(
    path: string
  ) => (bodyData: T, extraHeaders?: HeadersInit) => Promise<U>

  configure(api_url: string, experiment_slug: string) {
    this.LABS_API_URL = api_url
    this.EXPERIMENT_SLUG = experiment_slug

    this.GET = handleGet(this.LABS_API_URL)
    this.POST = handlePost(this.LABS_API_URL)
    this.PUT = handlePut(this.LABS_API_URL)
  }

  async submitAnswers(data: ExperimentData, token: string) {
    return await this.POST<ExperimentData, ExperimentDataResponse>(
      '/api/auth/labs/experiment/store'
    )(data, { 'X-AUTH-TOKEN': token })
  }

  async submitExtraData({ id, token, data }: SubmitExtraDataRequest) {
    return await this.PUT<ExperimentData, ExperimentDataResponse>(
      `/api/auth/labs/experiment/store/${id}`
    )(data, { 'X-AUTH-TOKEN': token })
  }

  async checkDone(experiment_slug: string, token: string) {
    return await this.POST<{ experiment_slug: string }, { data: boolean }>(
      `/api/auth/labs/experiment/check`
    )({ experiment_slug }, { 'X-AUTH-TOKEN': token }).then(r => r.data)
  }

  async experimentData(experiment_slug: string) {
    return await this.GET<{ data: ExperimentData }>(
      `/api/labs/experiment/${experiment_slug}`
    )
  }

  async checkThisIsDone(token: string) {
    return await this.checkDone(this.EXPERIMENT_SLUG, token)
  }

  async checkExperiments(token: string) {
    return await this.GET<{ data: Array<{ [slug: string]: boolean }> }>(
      '/api/auth/labs/experiment/all',
      token
    )
  }
}

export default new LabsAPI()
