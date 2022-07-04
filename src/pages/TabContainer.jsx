import { Title } from "../style/style";
import Tab from "../components/Tabs";
import Navbar from "../navigation/NavBar";

//Contient toute la todolist
const TabContainer = () => {
  return (
    <>
      <Navbar />
      <Title>~To Do List~</Title>
      <Tab />
    </>
  );
};
export default TabContainer;
