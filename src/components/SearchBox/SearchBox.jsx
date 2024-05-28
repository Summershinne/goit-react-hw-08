import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";


export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (e) => {
        dispatch(changeFilter(e.target.value))
    };
    return (
        <div>
            <p>Find contacts by name </p>
                <input className={css.input} type="text" value={filter} onChange={handleFilterChange}/>
        </div>
    )
};