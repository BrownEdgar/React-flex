import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditUser.scss";

export default function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editedUser, setEditedUser] = useState({
    full_name: "",
    email: "",
    about: "",
  });

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === parseInt(id));
    if (userToEdit) {
      setEditedUser({
        full_name: userToEdit.full_name,
        email: userToEdit.email,
        about: userToEdit.about,
      });
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === parseInt(id)
          ? {
              ...user,
              full_name: editedUser.full_name,
              email: editedUser.email,
              about: editedUser.about,
            }
          : user
      )
    );
    navigate("/about");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  return (
    <div className="EditUser">
      <h2>Edit User</h2>
      <form className="EditUser__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={editedUser.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="about">Description</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            value={editedUser.about}
            onChange={handleChange}
            placeholder="...Description"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Save Changes" />
        </div>
      </form>
    </div>
  );
}
