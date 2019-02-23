import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    
    static getInitialProps({ renderPage }) {
        
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();
        const page = renderPage( App => props => sheet.collectStyles(<App {...props}/>) );

        // Step 2: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 3: Pass it on as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}