import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillsTable from "../components/SkillsTable";
import Batches from "../components/Batches";
import Users from "../components/Users";
import Students from "../components/Students";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}></h1>
      {/* Render the components */}
      <Students />
      <SkillsTable />
      <Batches />
      <Users />
    </div>
  );
};

export default HomePage;
