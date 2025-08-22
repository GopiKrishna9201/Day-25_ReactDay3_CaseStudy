import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    if (selectedId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedId}`)
        .then((res) => res.json())
        .then(setUserDetails);
    }
  }, [selectedId]);

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id} onClick={() => setSelectedId(u.id)} style={{ cursor: "pointer" }}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>

      {userDetails && (
        <div style={{ marginTop: "20px" }}>
          <h3>{userDetails.name}</h3>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
