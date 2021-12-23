import { connect } from "react-redux";

import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import { mapDispatch, mapState } from "./configStore";
import "./App.css";

const App = () => {
  const CountContainer = connect(mapState, mapDispatch)(Counter);
  const UserFormContainer = connect(mapState, mapDispatch)(UserForm);

  return (
    <>
      <CountContainer />
      <UserFormContainer />
    </>
  );
};

export default App;
