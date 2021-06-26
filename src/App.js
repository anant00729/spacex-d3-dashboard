import "./App.css";
import Header from "./common/header";
import SideBar from "./common/sidebar";
import AdminHome from "./admin-home";
import { AppWrapper } from "./styles";

function App() {
  return (
    <AppWrapper>
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <SideBar />
      {/* Home Main Body */}
      <AdminHome />
    </AppWrapper>
  );
}

export default App;
