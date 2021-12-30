import data from "../data.json";
import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header"
import Hero from "./Hero"
function App() {
    return (
        <>
            <Header/>
            <main className="container">
            <Hero />
            <Articles/>
            </main>
            <Footer/>
        </>
    );
}

export default App;