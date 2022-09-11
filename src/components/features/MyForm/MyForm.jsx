import "./MyForm.css";
import { useState } from "react";
import { addUserAction } from "../../../store/actions/users-actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (userObj) => dispatch(addUserAction(userObj)),
});

function MyForm(props) {
  const [user, setUser] = useState(props.users[0]);
  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-form">
      <h1>MyForm</h1>
      <input
        value={user.fName}
        placeholder="Enter First Name"
        name="fName"
        type="text"
        onChange={changeInput}
      />
      <input
        value={user.lName}
        placeholder="Enter First Name"
        name="lName"
        type="text"
        onChange={changeInput}
      />
      <input
        value={user.age}
        placeholder="Enter First Name"
        name="age"
        type="number"
        onChange={changeInput}
      />
      <input
        value={user.email}
        placeholder="Enter First Name"
        name="email"
        type="email"
        onChange={changeInput}
      />
      <button
        onClick={() => {
          user.id = Date.now();
          props.addNewUser({ ...user });
        }}
      >
        Add user
      </button>
      <div></div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(MyForm);
