import React, { useState } from "react";
import styles from "../styles/Students.module.css";

const students = [
  {
    name: "Paul Diamond",
    email: "codediq@gmail.com",
    phone: "07064581527",
    gender: "Male",
    skill: "Software Engineering",
    batch: "Batch A, Sept. 2024",
    avatar: "/1.jpg",
    portfolio: "https://linkedin.com/in/pauldiamond",
  },
  {
    name: "Idris Tijani",
    email: "drizteejay@gmail.com",
    phone: "08161791297",
    gender: "Male",
    skill: "Software Engineering",
    batch: "Batch A, Sept. 2024",
    avatar: "/indiriii.jpg",
    portfolio: "https://www.linkedin.com/in/idris-opeyemi-tijani-062b241b8/",
  },
  {
    name: "John Daniel",
    email: "joe@example.com",
    phone: "07012345678",
    gender: "Male",
    skill: "Photography",
    batch: "Batch B, Nov. 2024",
    avatar: "/4.jpg",
    portfolio: "https://linkedin.com/in/",
  },
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter Logic
  const filteredStudents = students
    .filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.phone.includes(searchTerm);
      const matchesBatch =
        selectedBatch === "" || student.batch.includes(selectedBatch);
      const matchesSkill =
        selectedSkill === "" || student.skill === selectedSkill;
      return matchesSearch && matchesBatch && matchesSkill;
    })
    .sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name);
      return sortOrder === "asc" ? nameComparison : -nameComparison;
    });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trainees</h1>

      {/* Search and Filter Section */}
      <div className={styles.searchFilterWrapper}>
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className={styles.filterDropdown}
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="">Filter by Batch</option>
          <option value="Batch A">Batch A</option>
          <option value="Batch B">Batch B</option>
          <option value="Batch C">Batch C</option>
          <option value="Batch D">Batch D</option>
        </select>
        <select
          className={styles.filterDropdown}
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
        >
          <option value="">Filter by Skill</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Photography">Photography</option>
        </select>
        <button
          className={styles.sortButton}
          onClick={() =>
            setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"))
          }
        >
          Sort by Name ({sortOrder === "asc" ? "Asc" : "Desc"})
        </button>
      </div>

      {/* Students Table */}
      <table className={styles.studentTable}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Skill</th>
            <th>Batch</th>
            <th>Portfolio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
              >
                <td>
                  <img
                    src={student.avatar}
                    alt={`${student.name}'s avatar`}
                    className={styles.avatar}
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.gender}</td>
                <td>{student.skill}</td>
                <td>{student.batch}</td>
                <td>
                  <a
                    href={student.portfolio}
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
              <td colSpan="9" className={styles.noData}>
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
