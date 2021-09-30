import './toast.less'
const render = require('./toast.art')

export default class Toast {
  constructor (options) {
    this.text = options.text || 'Welcome to use toast!'
  }

  init () {
    const html = render({
      text: this.text
    })
    return html
  }
}
