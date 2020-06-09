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
      ...(token !== undefined ? { 'X-AUTH-TOKEN': token } : {}),
    },
  }).then(r => handleResponse<U>(r))

export const handlePost = handleReqWithBody('POST')
export const handlePut = handleReqWithBody('PUT')
