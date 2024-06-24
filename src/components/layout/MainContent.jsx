import PropTypes from "prop-types";

import Navbar from "@/components/layout/Navbar";

const MainContent = ({ children }) => {
  return (
    <div className="p-12 w-full rounded-s-[60px] bg-[#eceff6] dark:bg-dark-primary">
      <Navbar />
      <>{children}</>
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.node,
};

export default MainContent;
