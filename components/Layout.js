import Head from 'next/head';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

// Adding some custom header values, adding bootstrap
const CustomHead = () => (
  <Head>
    <title>Next JS Sample App</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous"></link>
  </Head>
)

const Layout = (props) => (
  <div style={layoutStyle}>
    <CustomHead />
    <div>
      <Header />
      {props.children}
    </div>
  </div>
)

export default Layout;