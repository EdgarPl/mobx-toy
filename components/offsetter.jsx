import Store from '../mobx/store'

const Offsetter = () => {
    return (<button onClick={Store.setOffset}>Go back!</button>)
}

export default Offsetter
