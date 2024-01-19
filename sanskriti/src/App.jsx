import Courses from "./components/Courses";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Categories />
      <Courses />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
