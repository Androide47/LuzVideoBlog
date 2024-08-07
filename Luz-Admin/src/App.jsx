import React, { useState } from "react";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <div className="text-center">
        {isAdmin ? <AdminPanel /> : <AdminLogin onLogin={setIsAdmin} />}
      </div>
    </div>
  );
};

export default App;
