function Article(props) {
    return (
        <article className="flex-30">
                    <img src={props.urlToImage} />
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <h4>{props.author}</h4>
        </article>
    );
}

export default Article;