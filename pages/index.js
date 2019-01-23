// This is the Link API
import Link from 'next/link';

const Index = () => (
    <Layout>
        <p>Hello Next.js</p>

        <Link href="/about">
            <a>About Page</a>
        </Link>

    </Layout>
)

export default Index