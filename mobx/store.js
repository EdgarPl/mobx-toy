import { makeAutoObservable, observable, computed, action, flow } from "mobx"

class Store {
    secondsPassed = 0
    offset = 0;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    increaseTimer() {
        this.secondsPassed += 1
    }

    setOffset(offset) {
        this.offset = Number.isInteger(offset) ? offset : this.secondsPassed
    }

    // only used for async
    setSecondsPassed(secs) {
        this.secondsPassed = secs
    }

    get offsetTime() {
        return this.secondsPassed - this.offset
    }

    async fetchTimeAsync() {
        const timeData = await (await fetch('http://worldtimeapi.org/api/timezone/Europe/Riga')).json()
        const secs = new Date(timeData.datetime).valueOf() //convert to epoch

        this.setSecondsPassed(secs)
    }

    *fetchTimeFlow() {
        const timeData = yield (yield fetch('http://worldtimeapi.org/api/timezone/Europe/Riga')).json()
        const secs = new Date(timeData.datetime).valueOf() //convert to epoch

        this.secondsPassed = secs
    }
}

const singleton = new Store()

setInterval(() => {
    singleton.increaseTimer()
}, 1000)

export default singleton
