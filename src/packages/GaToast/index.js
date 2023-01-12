import ToastBoard from './toastBoard'

const defaultOptions = {
  useTitle: true,
  useIcon: true,
  closeButton: true,
  round: false,
  theme: '',
  timeout: 5000,
  clickToClose: true,
  displayOnTop: false,
  snackbar: false,
  freeze: true
}

let extendOptions = {}
const setOption = option => {
  return { ...defaultOptions, ...option }
}

export default {
  install(app, options = {}) {
    extendOptions = setOption(options)
    app.config.globalProperties.$gaToast = new ToastBoard(extendOptions)
  }
}
