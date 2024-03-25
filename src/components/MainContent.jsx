import PropTypes from "prop-types";
import Navbar from "@components/Navbar";

const MainContent = ({ children }) => {
  const username = localStorage.getItem("userLoggedIn");
  return (
    <div className="p-12 w-full rounded-s-[60px] bg-[#eceff6]">
      <Navbar username={username} />
      <>{children}</>
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.node,
};

export default MainContent;
