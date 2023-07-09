//Parts
import {Provider} from "react-redux";
//Engine
import {store} from "../engine/init/store";
import Counter from "./containers/Counter";
import TodoForm from "./containers/TodoForm";


function App() {
    return (
        <Provider store={store}>
            <Counter/>
            <TodoForm/>
        </Provider>
    );
}

export default App;
