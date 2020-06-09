type GoogleOnSuccess = (googleUser: gapi.auth2.GoogleUser) => any
type GoogleOnFailure = (reason: string) => any

export const GoogleLoginConfig = (
  element: any,
  onSuccess: GoogleOnSuccess,
  onFailure: GoogleOnFailure
) => {
  // eslint-disable-next-line no-undef
  gapi.load('auth2', () => {
    // eslint-disable-next-line no-undef
    gapi.auth2
      .init({
        client_id: process.env.REACT_APP_GOOGLE_SIGNIN_CLIENT_ID,
        cookie_policy: 'single_host_origin',
        scope: 'profile email',
      })
      .attachClickHandler(element, {}, onSuccess, onFailure)
  })
}

export const FacebookLogin = (
  callback: (response: fb.StatusResponse) => void,
  rerequest: boolean = false
) => {
  // eslint-disable-next-line no-undef
  FB.login(callback, {
    scope: 'public_profile,email',
    ...(rerequest ? { auth_type: 'rerequest' } : {}),
  })
}

export class NeedsRerequestFacebookError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NeedsRerequestFacebookError'
  }
}

export default {
  GoogleLoginConfig,
  FacebookLogin,
  NeedsRerequestFacebookError,
}
