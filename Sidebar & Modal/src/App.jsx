import { useGlobalContext } from "./Context";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const App = () => {
  const { isModalOpen, isSidebarOpen } = useGlobalContext();
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};
export default App;
