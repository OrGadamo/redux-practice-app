import MyForm from "../../features/MyForm/MyForm";
import UsersTable from "../../features/UsersTable/UsersTable";
import "./Home.css";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => {
  return { users: state.users };
};
function Home(props) {
  return (
    <div className="home">
      <h1>Home</h1>
      <MyForm users={props.users} />
      <UsersTable users={props.users} />
    </div>
  );
}

export default connect(mapStateToProps, null)(Home);
