import useForm from "../hooks/useForm";

const Item = ({ item: { user, id } }) => {
  const { deleteItem } = useForm();
  return (
    <li>
      <p>
        {user}
        <button onClick={() => deleteItem(id)}>Delete</button>
      </p>
    </li>
  );
};

export default Item;
