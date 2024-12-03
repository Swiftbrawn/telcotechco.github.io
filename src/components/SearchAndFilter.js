import React from "react";
import styles from "../styles/SearchAndFilter.module.css";

const SearchAndFilter = ({ searchValue, onSearchChange, filterOptions, onFilterChange }) => {
  return (
    <div className={styles.searchFilterContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="">Filter by...</option>
        {filterOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;
