import { Link } from "react-router-dom";  // Import Link from react-router-dom

function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>
        {/* Link to the profile page of the user based on their ID */}
        <Link to={`/profile/${user.id}`}>View profile</Link>
      </p>
    </article>
  );
};

export default UserCard;
