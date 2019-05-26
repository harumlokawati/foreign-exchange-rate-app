import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from 'react-jss/lib/JssProvider'
import Layout from '../src/components/Layout'
import initStore from '../src/store'
import getPageContext from '../src/utils/getPageContext'
class MyApp extends App {
    pageContext = getPageContext()

    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
        }

        return { pageProps }
    }

    componentDidMount () {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render () {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                >
                <Provider store={store}>
                    <Layout>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
                </JssProvider>
            </Container>
        )
    }
}

export default withRedux(initStore)(withReduxSaga(MyApp))