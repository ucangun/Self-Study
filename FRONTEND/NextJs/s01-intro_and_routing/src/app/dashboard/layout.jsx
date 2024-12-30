import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
};

export default DashboardLayout;
