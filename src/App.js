import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import Join from "./components/join/Join";
import Plans from "./components/plans/Plans";
import Programes from "./components/programs/Programes";
import Testimonials from "./components/testimonials/Testimonials";
import WhyUs from "./components/whyus/WhyUs";

function App() {
    return ( <
        div className = "App" >
        <
        Hero / >
        <
        Programes / >
        <
        WhyUs / >
        <
        Plans / >
        <
        Testimonials / >
        <
        Join / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;