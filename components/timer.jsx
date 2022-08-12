import Store from '../mobx/store'
import { observer } from "mobx-react-lite"

const Timer = observer(() => {
    return (<div>Time elapsed: {Store.secondsPassed}</div>)
})

export default Timer
