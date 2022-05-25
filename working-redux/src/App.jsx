import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/action";
import "./index.css";

export default function App() {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.todos);

    const getData = () => {
        dispatch(fetchData());
    };

    return (
        <div className="App">
            <button onClick={getData}>Fetch</button>
            <div>
                {data.map((e) => {
                    return <p key={e.id}>{e.title}</p>;
                })}
            </div>
        </div>
    );
}
