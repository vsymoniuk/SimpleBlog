import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import makeStore from "../store/store";

import { AppContext, AppInitialProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { AnyAction, CombinedState, Store } from "redux";
import { RootState } from "../interfaces/interfaces";

import Head from "next/head";

interface MyAppInitialProps extends AppInitialProps {
  Component: NextComponentType<NextPageContext, {}, {}>;
  store: Store<CombinedState<RootState>, AnyAction>;
}

const MyApp = ({
  Component,
  pageProps,
  store,
}: MyAppInitialProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Head>
        <title>Simple Blog</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ ctx, Component }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default withRedux(makeStore)(withReduxSaga(MyApp));
