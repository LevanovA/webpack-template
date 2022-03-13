import './counter.scss'

const getTemplate = () => {
    return `
        <div class="wrapper">
            <div class="counter__content">
                <button class="counter__button" data-event="plus" type="button">+</button>
                <p class="counter__value">0</p>
                <button class="counter__button" data-event="minus" type="button">-</button>
            </div>
        </div>
    `
}

export default class Counter {
    constructor(counter) {
        this.el = document.querySelector(counter)
        this.count = 0

        this.#render()
        this.#setup()
    }

    #render() {
        this.el.innerHTML = getTemplate();
        this.countNode = this.el.querySelector('.counter__value')
    }

    plus() {
        this.count++
        this.countNode.innerHTML = this.count
    }

    minus() {
        this.count--
        this.countNode.innerHTML = this.count
    }

    #setup() {
        this.plusNode = this.el.querySelector('[data-event="plus"]')
        this.minusNode = this.el.querySelector('[data-event="minus"]')

        this.clickHandler = this.clickHandler.bind(this)
        this.plusNode.addEventListener('click', this.clickHandler)
        this.minusNode.addEventListener('click', this.clickHandler)
    }

    clickHandler(evt) {
        const {event} = evt.target.dataset

        if (event === 'plus') {
            this.count++
            this.countNode.innerHTML = this.count
        } else if (event === 'minus') {
            this.count--
            this.countNode.innerHTML = this.count
        }
    }

}