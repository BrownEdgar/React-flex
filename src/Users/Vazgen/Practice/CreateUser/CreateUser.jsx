import "./CreateUser.scss";

export default function CreateUser({ handleSubmit }) {
  return (
    <div className="CreateUser">
      <h2>Add User</h2>
      <form className="CreateUser__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input type="text" id="full_name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="about">Description</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            placeholder="...Description"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Add User" />
        </div>
      </form>
    </div>
  );
}
