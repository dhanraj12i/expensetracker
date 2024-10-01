import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 p-4">
      <LeftPane />
      <RightPane />
    </div>
  );
};

export default Dashboard;
