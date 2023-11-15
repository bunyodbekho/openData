import MainLayout from "./components/layouts/MainLayout/MainLayout";
import DataCard from "./components/DataCard/DataCard";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import DisplayProgress from "./components/DisplayProgress/DisplayProgress";

export default function App() {
  return (
    <>
      <Navbar />
      <MainLayout />
    </>
  );
  // <MainLayout></MainLayout>;
}
