import { handleGet, handlePost /* handlePut */ } from './api'

type FacebookLoginData = { token: string }
type GoogleLoginData = { token: string }
type EmailLoginData = {
  email: string
  password: string
}
type LoginData = FacebookLoginData | GoogleLoginData | EmailLoginData

const GATO_API_URL = process.env.REACT_APP_GATO_API_URL as string

export type AuthResponse = {
  data: {
    accessToken: string
  }
}

type NewPasswordResponse = AuthResponse

type ResetRequest = {
  email: string
  url: string
}

type ResetResponse = {
  data: boolean
}

type NewPasswordRequest = {
  password: string
  token: string
}

type CheckNewsReponse = {
  data: { isGato: boolean | null; isLabs: boolean | null }
}

type RegisterWithEmailData = {
  name: string
  email: string
  password: string
}

class GatoAPI {
  GATO_API_URL: string
  GET: <U>(path: string, token?: string) => Promise<U>
  POST: <T, U>(
    path: string
  ) => (bodyData: T, extraHeaders?: HeadersInit) => Promise<U>
  PUT: <T, U>(
    path: string
  ) => (bodyData: T, extraHeaders?: HeadersInit) => Promise<U>

  configure(api_url: string) {
    this.GATO_API_URL = api_url

    this.GET = handleGet(this.GATO_API_URL)
    this.POST = handlePost(this.GATO_API_URL)
  }

  async registerWithEmail(
    bodyData: RegisterWithEmailData,
    extraHeaders?: HeadersInit
  ) {
    return await this.POST<RegisterWithEmailData, AuthResponse>(
      '/api/user/register'
    )(bodyData, extraHeaders)
  }

  async sendEmailToResetPassword(
    bodyData: ResetRequest,
    extraHeaders?: HeadersInit
  ) {
    return await this.POST<ResetRequest, ResetResponse>('/api/user/reset')(
      bodyData,
      extraHeaders
    )
  }

  login<T extends LoginData>(service: string) {
    return this.POST<T, AuthResponse>(`/api/user/${service}`)
  }

  async fbLogin(bodyData: FacebookLoginData, extraHeaders?: HeadersInit) {
    return await this.login<FacebookLoginData>('facebook')(
      bodyData,
      extraHeaders
    )
  }
  async googleLogin(bodyData: GoogleLoginData, extraHeaders?: HeadersInit) {
    return await this.login<GoogleLoginData>('google')(bodyData, extraHeaders)
  }
  async emailLogin(bodyData: EmailLoginData, extraHeaders?: HeadersInit) {
    return await this.login<EmailLoginData>('login')(bodyData, extraHeaders)
  }

  async sendNewPassword({ password, token }: NewPasswordRequest) {
    return await this.POST<{ password: string }, NewPasswordResponse>(
      `/api/user/reset/${token}`
    )({ password })
  }
  async checkAllowsNews(token: string) {
    return await this.GET<CheckNewsReponse>(
      '/api/newsletter/check',
      token
    ).then(r => r.data.isLabs)
  }
  async sendAllowsNews(allowsNews: 1 | 0, token: string) {
    return await this.POST<{ isLabs: 1 | 0 }, {}>('/api/newsletter/set')(
      { isLabs: allowsNews },
      { 'X-AUTH-TOKEN': token }
    )
  }
}

export default new GatoAPI()
