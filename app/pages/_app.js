import "../assets/main.scss";
import store from "../store.js";
import NextApp from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";

@withRedux(store)
class MyApp extends NextApp {
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default MyApp;
