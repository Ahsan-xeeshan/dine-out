import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />
        <Layout />
      </div>
    </div>
  );
}

export default App;
