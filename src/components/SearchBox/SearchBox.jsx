import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

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