import Menu from "./homeComponents/menu";
import Assignments from "./homeComponents/assignments";
import Tasks from "./homeComponents/tasks";

const Home = () => {
  return (
    <div className="homeContainer">
      <Menu />
      <div className="grid">
        <Assignments />
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
