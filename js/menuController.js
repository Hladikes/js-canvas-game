class MenuController {
  constructor() {
    this.viewElements = []
    this.gotoElements = []
    this.actionElements = []
  }

  init(actions = {}) {
    this.actions = actions

    // Init views
    this.viewElements = [ ...document.querySelectorAll('[view]') ]
    this.viewElements.forEach((view, index) => view.hidden = index !== 0)

    // Init goto buttons
    this.gotoElements = [ ...document.querySelectorAll('[goto]') ]
    this.gotoElements.forEach(el => {
      const where = el.getAttribute('goto')

      el.addEventListener('click', () => {
        this.viewElements.forEach(view => {
          view.hidden = !(view.getAttribute('view') === where)
        })
      })
    })

    // Init actions
    this.actionElements = [ ...document.querySelectorAll('[action]') ]
    this.actionElements.forEach(actionEl => {
      actionEl.addEventListener('click', () => {
        const action = actionEl.getAttribute('action')
        if (action in this.actions) {
          this.actions[action]()
        }
      })
    })
  }

  showView(where) {
    this.viewElements.forEach(view => {
      view.hidden = !(view.getAttribute('view') === where)
    })
  }
}

export default new MenuController()