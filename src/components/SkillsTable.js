import React, { useState } from "react";
import styles from "../styles/SkillsTable.module.css";

const skills = [
  {
    name: "Software Engineering",
    category: "Physical Classes",
    skillImage: "/Engineer.jpg",
    portfolio: "https://portfolio.com/paul-diamond",
    batch: "Batch A, Sept 2024",
  },
  {
    name: "Data Analyst",
    category: "Physical Classes",
    skillImage: "/Data.jpg",
    portfolio: "https://portfolio.com/idris-tijani",
    batch: "Batch B, Dec 2024",
  },
  {
    name: "Digital Marketing",
    category: "Physical Classes",
    skillImage: "/Digita.jpg",
    portfolio: "https://portfolio.com/john-smith",
    batch: "Batch C, Mar 2025",
  },
  {
    name: "Photography",
    category: "Physical Classes",
    skillImage: "/Photo.jpg",
    portfolio: "https://portfolio.com/emily-rose",
    batch: "Batch D, Jun 2025",
  },
];

const SkillsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // Filtered skills based on search query and category
  const filteredSkills = skills.filter((skill) => {
    const query = searchQuery.toLowerCase();
    const isNameMatch = skill.name.toLowerCase().includes(query);
    const isCategoryMatch = skill.category.toLowerCase().includes(query);
    const isCategorySelected = categoryFilter ? skill.category === categoryFilter : true;

    return (isNameMatch || isCategoryMatch) && isCategorySelected;
  });

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.title}>Our Skilled Professionals</h1>

      {/* Search and Filter */}
      <div className={styles.searchFilterWrapper}>
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchBar}
        />
        <select
          className={styles.filterDropdown}
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="">Filter by Category</option>
          <option value="Physical Classes">Physical Classes</option>
          <option value="Virtual Classes">Virtual Classes</option>
        </select>
      </div>

      {/* Table */}
      <table className={styles.skillsTable}>
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Skill Image</th>
            <th>Category</th>
            <th>Batch</th>
            <th>Portfolio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
              >
                <td>{skill.name}</td>
                <td>
                  <img
                    src={skill.skillImage}
                    alt={`${skill.name}'s Avatar`}
                    className={styles.skillImage}
                  />
                </td>
                <td>{skill.category}</td>
                <td>{skill.batch}</td>
                <td>
                  <a
                    href={skill.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.portfolioLink}
                  >
                    <i className="fa-solid fa-link"></i>
                  </a>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.editBtn} title="Edit">
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                    <button className={styles.deleteBtn} title="Delete">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.noData}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
