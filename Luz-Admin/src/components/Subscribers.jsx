import React, { useEffect, useState } from "react";

// Sample data for subscribers (replace this with actual API call later)
const sampleSubscribers = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Sam Johnson", email: "sam.johnson@example.com" },
];

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    // Fetch subscribers from API (replace sample data with actual API call)
    setSubscribers(sampleSubscribers);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Subscribers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.id}</td>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subscribers;
