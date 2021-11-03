import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import AboutUs from "./home/AboutUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Layout title="Home">
      <div>
        <NavBar />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;