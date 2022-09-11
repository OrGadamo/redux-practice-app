import { ADD_USER, UPDATE_USER, DELETE_USER } from "../types/users-types";
export default function usersReducer({ users }, action) {
  switch (action.type) {
    case ADD_USER:
      return { users: [...users, action.payload] };
    case UPDATE_USER:
      return {
        users: users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return { users: users.filter((user) => user.id !== action.payload) };
    default:
      return { users };
  }
}
