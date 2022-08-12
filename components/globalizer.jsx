import Store from '../mobx/store'

const Globalizer = (() => {
    return (<button onClick={Store.fetchTimeFlow}>Okay, but how many seconds has it been REALLY</button>)
})

export default Globalizer
