import Head from 'next/head';
import Header from '../Header/Header';
import { LayoutStyle } from './Layout_style';

// Adding some custom header values
const CustomHead = () => (
    <Head>
        <title>Next JS Sample App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
)

const Layout = (props) => (
    <React.Fragment>
        <LayoutStyle />
        <CustomHead />
        <div>
            <Header />
            {props.children}
        </div>
    </React.Fragment>
)

export default Layout;