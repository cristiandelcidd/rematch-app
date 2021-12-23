import useForm from "../hooks/useForm";
import List from "./List";

const UserForm = ({ count: { users } }) => {
  const { user, setUser, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Add User</button>
      </form>

      <List users={users} />
    </>
  );
};

export default UserForm;
