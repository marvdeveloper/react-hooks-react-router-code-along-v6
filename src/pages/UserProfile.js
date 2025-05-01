// src/pages/UserProfile.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState(null);
  const { id } = useParams();  // Access the dynamic route parameter

  useEffect(() => {
    fetch(`https://your-api-url.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
