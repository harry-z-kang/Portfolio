import React, { FC, ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
