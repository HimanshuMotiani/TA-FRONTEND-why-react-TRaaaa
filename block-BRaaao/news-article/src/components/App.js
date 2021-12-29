import data from "../data.json";
function App() {
    return (
        <>
            <header className="container flex">
                <h1>News Logo</h1>
                <ul className="flex">
                    <li className="margin-left">Home</li>
                    <li className="margin-left">About</li>
                    <li className="margin-left">Contact</li>
                </ul>
            </header>
            <main className="container">
                <section>
                    <div className="hero">
                        Hero Section
            </div>
                </section>
                <section className="article-section">
                    <h2>Articles</h2>
                    <div className="flex flex-wrap">
                        {data.map((article) => (
                            <Article info={article} />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="container flex">
                <small>2020 All rights reserved</small>
                <ul className="flex">
                    <li className="margin-left"><a href="">facebook</a></li>
                    <li className="margin-left"><a href="">Twitter</a></li>
                    <li className="margin-left"><a href="">Instagram</a></li>
                </ul>
            </footer>
        </>
    );
}
function Article(props) {
    return (
        <article className="flex-30">
                    <img src={props.info.urlToImage} />
                    <h3>{props.info.title}</h3>
                    <p>{props.info.description}</p>
                    <h4>{props.info.author}</h4>
        </article>
    );
}

export default App;