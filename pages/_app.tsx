import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../store/store';

import { AppContext, AppInitialProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { AnyAction, CombinedState, Store } from 'redux';

interface MyAppInitialProps extends AppInitialProps {
    Component: NextComponentType<NextPageContext, {}, {}>
    store: Store<CombinedState<any>, AnyAction>
}

const MyApp = ({Component, pageProps, store}: MyAppInitialProps): JSX.Element => {
    return (
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    )
}

MyApp.getInitialProps = async ({ctx,Component}:AppContext) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return {pageProps};
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
