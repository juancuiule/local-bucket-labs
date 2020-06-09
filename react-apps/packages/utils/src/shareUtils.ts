import analyticsUtils from './analyticsUtils'

type ShareService = 'whatsapp' | 'twitter' | 'facebook'

const share = (baseUrl: string, extra: string) => {
  window.open(`${baseUrl}${extra}`, '_blank')
}

const twitterShare = (text: string, url: string) => {
  share(
    `http://twitter.com/share`,
    `?text=${encodeURI(text)}&url=${encodeURI(url).replace('#', '%23')}`
  )
}

const whatsappShare = (text: string, url: string) => {
  share(
    'https://api.whatsapp.com/send',
    `?text=${encodeURI(text)} - ${encodeURI(url).replace('#', '%23')}`
  )
}

const facebookShare = (url: string) => {
  share(
    `https://www.facebook.com/sharer.php`,
    `?u=${encodeURI(url).replace('#', '%23')}`
  )
}

const shareExperiment = (
  EXPERIMENT_SHARE_TEXT: string,
  EXPERIMENT_URL: string
) => (service: ShareService) => () => {
  switch (service) {
    case 'whatsapp':
      analyticsUtils.CLICK_SHARE(service)
      whatsappShare(EXPERIMENT_SHARE_TEXT, EXPERIMENT_URL + '?share=whatsapp')
      break
    case 'twitter':
      analyticsUtils.CLICK_SHARE(service)
      twitterShare(EXPERIMENT_SHARE_TEXT, EXPERIMENT_URL + '?share=twitter')
      break
    case 'facebook':
      analyticsUtils.CLICK_SHARE(service)
      facebookShare(EXPERIMENT_URL + '?share=facebook')
      break
  }
}

export default {
  shareExperiment,
}
