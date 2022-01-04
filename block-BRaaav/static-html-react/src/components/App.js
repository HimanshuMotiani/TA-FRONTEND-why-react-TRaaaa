import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Blog from './Blog';
function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Blog />
                <Work />
                <Contact />
            </main>
            <Footer />
        </>
    )

}

export default App;