import {useSelector} from "react-redux";
import {todosSelectors} from "../../engine/core/todos/todoSlice";

export function Footer() {
    const length = useSelector(todosSelectors.length);
    console.log(length)
    return (
        <footer>
            length: {length}
        </footer>
    )
}