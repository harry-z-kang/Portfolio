import type { FC, ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <div>
      <Navigation />
      <main id="main-content">{children}</main>
    </div>
  );
};

export default Layout;
