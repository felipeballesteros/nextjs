import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Title from '../components/Title/Title'

const PostLink = (props) => (
  <li>
    <Link 
        as={`/p/${props.title}`}
        href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
    </Link>
  </li>
)

//Set up initial layout of the page
const Index = (props) => (
    <Layout>
        <Title text={'Batman TV Shows'}></Title>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

// Set the prefetch function
Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
}

export default Index