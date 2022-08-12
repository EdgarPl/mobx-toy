import Store from '../mobx/store'
import { observer } from "mobx-react-lite"

const OffsetTimer = observer(() => {
    return (<div>Time elapsed(if you&apos;re a time wizard): {Store.offsetTime}</div>)
})

export default OffsetTimer
