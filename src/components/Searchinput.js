import React from "react";
import styles from './pages/Home.module.css'

const SearchInput = ({value, onChange}) => {
    function handleChange (event) {
        onChange(event.target.value);
    }


    return (
        <input type="search"  placeholder="
        search by fruit family"
        value={value} onChange={handleChange} className={styles.input} />
    )
}

export default SearchInput