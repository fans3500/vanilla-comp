const render = require('./example.art')

export default class Example {
  constructor (options) {
    this.name = options.name || 'default test'
  }

  init () {
    const html = render({
      name: this.name
    })
    return html
  }
}
