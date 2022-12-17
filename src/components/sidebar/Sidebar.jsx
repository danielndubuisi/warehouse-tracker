import "./Sidebar.scss";
import logo from "../../asset/logo.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="logo" className="logo-img"></img>
        <span className="logo">Drugstoc</span>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
