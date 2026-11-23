import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Menu } from "./Menu";
import { About } from "./About";
import { Users } from "./Users";
// import { Footer } from "../components/Footer";

type AppLayoutTypes = {
    children: ReactNode;
  };
export const AppLayout: React.FC<AppLayoutTypes> = ({ children }) => {
    return (
      <>
        <section >
            <Header/>
            <Menu/>
            <About/>
            <Users/>
          <main>
            {children}
            </main>
            {/* <Footer/> */}
        </section>
      </>
    );
  };
  