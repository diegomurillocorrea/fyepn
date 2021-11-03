import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Layout title="Home">
      <div>
        <NavBar />
      </div>
      <div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;