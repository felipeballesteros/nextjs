import Layout from '../components/Layout/Layout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
    <Layout>
        <div className="card">
            <div className="additional">
            <div className="user-card">
                <title id="title">{props.show.name}</title>
                <img src={props.show.image.medium.replace(/^http/, 'https')} />
            </div>
            </div>
            <div className="general">
                <h1>{props.show.name}</h1>
                <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
            </div>
        </div>
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await

        fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post;