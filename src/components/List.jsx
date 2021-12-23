import Item from "./Item";

const List = ({ users }) => {
  return (
    <ul>
      {users.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
