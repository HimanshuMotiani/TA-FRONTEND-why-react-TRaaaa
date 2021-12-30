import data from "../data.json";
import Article from "./Article"
function Articles() {
    return (
        <section className="article-section">
                    <h2>Articles</h2>
                    <div className="flex flex-wrap">
                        {data.map((article) => (
                            <Article key={article.publishedAt} {...article} />
                        ))}
                    </div>
                </section>
    )
}

export default Articles;