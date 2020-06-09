export const handleResponse = async <U>(response: Response) => {
  if (response.ok) {
    return (await response.json()) as U
  } else {
    const error = {
      status: response.status,
      error: await response.json(),
    }
    throw error
  }
}

const handleReqWithBody = (method: 'POST' | 'PUT') => (api_url: string) => <
  T,
  U
>(
  path: string
) => async (bodyData: T, extraHeaders?: HeadersInit) =>
  await fetch(`${api_url}${path}`, {
    method,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    body: JSON.stringify(bodyData),
  }).then(r => handleResponse<U>(r))

export const handleGet = (api_url: string) => async <U>(
  path: string,
  token?: string
) =>
  await fetch(`${api_url}${path}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
      ...(token !== undefined ? { authorization: `Bearer ${token}` } : {}),
    },
  }).then(r => handleResponse<U>(r))

export const handlePost = handleReqWithBody('POST')

type LoginData = {
  email: string
  password: string
}

export type AuthResponse = {
  accessToken: string
  email: string
}

type RegisterData = {
  email: string
  password: string
}

type RefreshResponse = {
  accessToken: string
}

class API {
  API_URL: string = 'http://localhost:4000'
  GET: <U>(path: string, token?: string) => Promise<U> = handleGet(this.API_URL)

  POST: <T, U>(
    path: string
  ) => (bodyData: T, extraHeaders?: HeadersInit) => Promise<U> = handlePost(
    this.API_URL
  )

  async register(bodyData: RegisterData, extraHeaders?: HeadersInit) {
    return await this.POST<RegisterData, AuthResponse>('/api/register')(
      bodyData,
      extraHeaders
    )
  }

  async login(bodyData: LoginData, extraHeaders?: HeadersInit) {
    return await this.POST<LoginData, AuthResponse>(`/api/login`)(
      bodyData,
      extraHeaders
    )
  }

  async logout() {
    return await this.POST<{}, {}>(`/api/logout`)({})
  }

  async refreshToken() {
    return await this.POST<{}, RefreshResponse>('/api/refresh_token')({})
  }

  async check(token: string) {
    return await this.GET<{ logger: boolean }>('/api/protected', token)
  }
}

export default new API()
