import Layout from '../components/layout'
import '../styles/globals.css'
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
 return (
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </Provider>
 )
}

// export default MyApp
export default wrapper.withRedux(MyApp);
