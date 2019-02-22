import Head from 'next/head';
import Header from './Header';

// Adding some custom header values, adding bootstrap
const CustomHead = () => (
  <Head>
    <title>Next JS Sample App</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
)

const Layout = (props) => (
  <div>
    <CustomHead />
    <div>
      <Header />
      {props.children}
    </div>
  </div>
)

export default Layout;