import PropTypes from "prop-types";
import Sidebar from "@components/Sidebar";
import MainContent from "@components/MainContent";

import { Toaster } from "@/components/ui/toaster";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <MainContent>
        <>{children}</>
      </MainContent>
      <Toaster />;
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
