import React, { FC, ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
