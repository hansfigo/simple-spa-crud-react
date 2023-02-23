import { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import HeroSection from "./pages/HomePage/HomePage";

function App() {
  const [page, setPage] = useState(0);

  const handlePage = (index: number) => {
    setPage(index);
  };

  const styles = {
    main: "flex justify-center",
    navbarText: "text-md hover:text-blue-600 cursor-pointer",
    navbarTextActive: "text-md text-blue-600 cursor-pointer",
  };

  return (
    <div className={styles.main}>
      <div className="w-full p-4 fixed flex justify-center shadow-md ">
        <div className="w-full max-w-7xl min-w-max flex items-center justify-between ">
          <div className="text-3xl">Navbar</div>
          <div className="flex">
            <p onClick={() => handlePage(0)} className={page == 0 ? styles.navbarTextActive :styles.navbarText}>
              Home
            </p>
            <p onClick={() => handlePage(1)} className={page == 1 ? styles.navbarTextActive :styles.navbarText}>
              Form
            </p>
          </div>
        </div>
      </div>
      <div className="mt-44">
        <CSSTransition in={page === 0} classNames="fade" timeout={300}>
          <div className="fade">
            {page === 0 && (
              <HeroSection
                title="Claudio Hans Figo"
                subtitle="Junior Front-End Developer specializing in Flutter & ReactJS"
              />
            )}
          </div>
        </CSSTransition>
        <CSSTransition in={page === 1} classNames="fade" timeout={300}>
          <div className="fade">{page === 1 && <UserProfilePage />}</div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
