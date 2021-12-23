import { useState } from "react";

import store from "../store";

const useForm = () => {
  const [user, setUser] = useState("");

  const { dispatch } = store;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.trim()) return;

    const id = Math.random().toString().split(".")[1].slice(0, 10);

    dispatch.count.addUser({ id, user });

    // dispatch({
    //   type: "count/addUser",
    //   payload: {
    //     id,
    //     user,
    //   },
    // });

    reset();
  };

  const reset = () => {
    setUser("");
  };

  const deleteItem = (id) => {
    dispatch.count.deleteUser(id);
  };

  return { user, setUser, handleSubmit, deleteItem };
};

export default useForm;
