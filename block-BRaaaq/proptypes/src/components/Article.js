import PropTypes from 'prop-types'
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

Article.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    urlToImage:PropTypes.string.isRequired
}


export default Article;