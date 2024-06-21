import PropTypes from "prop-types";

import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <MainContent>
        <>{children}</>
      </MainContent>
      <Toaster />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
