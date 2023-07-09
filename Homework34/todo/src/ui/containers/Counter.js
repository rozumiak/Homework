import {useDispatch, useSelector} from "react-redux";
//Components
import Button from "../components/form/Button";
//Engine
import {increment, decrement, value} from "../../engine/core/counter/counterSlice"

export default function Counter() {
    const dispatch = useDispatch();
    const countValue = useSelector(value)

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div className="App">
            value:{countValue}
            <Button className="counter__btn" onClick={onIncrement} text="+"/>
            <Button className="counter__btn" onClick={onDecrement} text="-"/>
        </div>
    )
}

