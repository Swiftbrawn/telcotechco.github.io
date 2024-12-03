import React, { useState } from "react";
import styles from "../styles/Batches.module.css"; // Assuming you have this CSS file

const Batches = () => {
  // State to manage batches, new batch data, search and filter
  const [batches, setBatches] = useState([
    { name: "Batch A", date: "2024-09", image: "/we.jpg" },
    { name: "Batch B", date: "2024-11", image: "/Digita.jpg" },
    { name: "Batch C", date: "2025-01", image: "/we.jpg" },
  ]);

  const [newBatch, setNewBatch] = useState({ name: "", date: "" }); // Removed image field
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("name");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBatch((prevBatch) => ({ ...prevBatch, [name]: value }));
  };

  // Add new batch to the list
  const handleAddBatch = () => {
    if (!newBatch.name || !newBatch.date) {
      alert("All fields are required!");
      return;
    }

    setBatches((prevBatches) => [...prevBatches, newBatch]);
    setNewBatch({ name: "", date: "" }); // Reset form
  };

  // Delete batch from the list
  const handleDeleteBatch = (index) => {
    if (window.confirm("Are you sure you want to delete this batch?")) {
      setBatches((prevBatches) => prevBatches.filter((_, i) => i !== index));
    }
  };

  // Filter batches based on search query and selected category
  const filteredBatches = batches.filter((batch) => {
    const query = searchQuery.toLowerCase();
    if (categoryFilter === "name") {
      return batch.name.toLowerCase().includes(query);
    }
    if (categoryFilter === "date") {
      return batch.date.toLowerCase().includes(query);
    }
    return true;
  });

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.title}>Batches</h1>

      {/* Search and Filter Section */}
      <div className={styles.searchFilterWrapper}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBar}
        />
        <select
          className={styles.filterDropdown}
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
      </div>

      {/* Add New Batch Form */}
      <div className={styles.newBatchForm}>
        <input
          type="text"
          name="name"
          placeholder="Batch Name"
          value={newBatch.name}
          onChange={handleInputChange}
          className={styles.input}
        />
        {/* Month-Year picker input */}
        <input
          type="month"
          name="date"
          value={newBatch.date}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button onClick={handleAddBatch} className={styles.addButton}>
          Add Batch
        </button>
      </div>

      {/* List of Batches */}
      {filteredBatches.length > 0 ? (
        <table className={styles.skillsTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBatches.map((batch, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
              >
                <td>{batch.name}</td>
                <td>{batch.date}</td>
                <td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    title="Edit"
                    onClick={() => alert(`Editing ${batch.name}`)}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    className={styles.deleteBtn}
                    title="Delete"
                    onClick={() => handleDeleteBatch(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.noData}>No batches found</p>
      )}
    </div>
  );
};

export default Batches;
