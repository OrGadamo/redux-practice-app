import {
  deleteUserAction,
  updateUserAction,
} from "../../../store/actions/users-actions";
import "./UsersTable.css";
import { connect } from "react-redux/es/exports";

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (userObj) => dispatch(deleteUserAction(userObj)),
  updateUser: (userObj) => dispatch(updateUserAction(userObj)),
});

function UsersTable({ users, deleteUser, updateUser }) {
  console.log(users);
  const changeInput = (e, user) => {
    user[e.target.name] = e.target.value;
  };
  return (
    <div className="users-table">
      <h1>UsersTable</h1>
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Delete</td>
            <td>Update</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => (
            <tr>
              <td>
                <input
                  name="fName"
                  type="text"
                  onChange={(e) => changeInput(e, item)}
                  defaultValue={item.fName}
                />
              </td>
              <td>
                <input
                  name="lName"
                  type="text"
                  onChange={(e) => changeInput(e, item)}
                  defaultValue={item.lName}
                />
              </td>
              <td>
                <input
                  name="age"
                  type="number"
                  onChange={(e) => changeInput(e, item)}
                  defaultValue={item.age}
                />
              </td>
              <td>
                <input
                  name="email"
                  type="email"
                  onChange={(e) => changeInput(e, item)}
                  defaultValue={item.email}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(item.id);
                  }}
                >
                  X
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    console.log(item);
                    updateUser(item);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(UsersTable);
