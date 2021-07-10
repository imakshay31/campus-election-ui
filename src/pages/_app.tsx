import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { CssBaseline, LinearProgress, Snackbar } from '@material-ui/core';
import 'regenerator-runtime/runtime';
import MuiAlert from '@material-ui/lab/Alert';
import { ThemeProvider } from '@material-ui/core/styles';
import { useRouter, Router } from 'next/router';
import LoadingScreen from '../components/loadingScreen';
import { makeStyles, Theme } from '@material-ui/core/styles';
import makeEnvironment from '../relay/environment';
import query from '../relay/Query/AppViewerQuery';
import { AppViewerQuery, AppViewerQueryResponse } from '../__generated__/AppViewerQuery.graphql';
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery } from 'react-relay/hooks';
const { Suspense } = React;
import { Environment } from 'react-relay';

import {
  themeProps,
  defaultPrimary,
  defaultSecondary,
  defaultMode,
  themeContext,
  toggleMode,
} from '../components/theme';

const useStyles = makeStyles((theme: Theme) => ({
  linearLoading: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.modal + 1,
  },
}));

export interface ComponentProps {
  //environment: Environment;
  viewer: AppViewerQueryResponse['getViewer'];
  refetch: () => void;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
  // viewerRef: PreloadedQuery<AppViewerQuery>;
}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const QueryRender = (props) => {
  const data = usePreloadedQuery(query, props.preloadedQuery);
  return <h1>{data}</h1>;
};

const MyApp = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const [success, setSuccess] = React.useState(false);
  const [errors, setError] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const router = useRouter();
  const classes = useStyles();
  const first = router.route.split('/')[1];

  const isProtectedRoute = React.useMemo(() => {
    return first === 'dashboard';
  }, [first]);

  //const environment: Environment = makeEnvironment();

  // const environment: Environment | null = React.useMemo(() => {

  //   if (first === 'dashboard') {
  //     const env = makeEnvironment();

  //     const preloadedQuery = loadQuery(env, query, {
  //       /* query variables */

  //     });
  //     return
  //   }
  //   return null;
  // }, [first]);

  // const preLoadq  = React.useMemo(() => {
  //   if (first === 'dashboard') {
  //     const preloadedQuery = loadQuery(environment, query, {
  //       /* query variables */
  //     });
  //     return preloadedQuery;
  //   }
  //   return null;
  // }, [first]);

  // const environment: Environment | null = React.useMemo(() => {
  //   if (first === 'dashboard') return makeEnvironment();
  //   return null;
  // }, [first]);
  const RelayEnvironment = makeEnvironment();
  const preloadedQuery = loadQuery(RelayEnvironment, query, {});
  const [routeChange, setRouteChange] = React.useState<boolean>(false);

  Router.events.on('routeChangeStart', () => {
    setRouteChange(true);
  });
  Router.events.on('routeChangeComplete', () => setRouteChange(false));
  Router.events.on('routeChangeError', () => setRouteChange(false));
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleClose = (event?: React.SyntheticEvent) => {
    setSuccess(false);
    setError(false);
  };

  const setSuccessMessage = (msg: string) => {
    setSuccessMsg(msg);
    setSuccess(true);
  };

  const setErrorMessage = (msg: string) => {
    setErrorMsg(msg);
    setError(true);
  };

  const [currentTheme, setCurrentTheme] = React.useState(() =>
    createMuiTheme({
      typography: {
        fontFamily: [
          'Nunito',
          'Montserrat',
          'Roboto',
          'sans-serif',
          'Arial',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      props: themeProps,
      palette: {
        primary: {
          main: defaultPrimary,
        },
        secondary: {
          main: defaultSecondary,
        },
        type: defaultMode,
      },
    })
  );

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <themeContext.Provider
            value={{
              mode: currentTheme.palette.type,
              primary: currentTheme.palette.primary.main,
              secondary: currentTheme.palette.secondary.main,
              toggleMode: () => toggleMode(setCurrentTheme),
              updateColors: () => {},
            }}
          >
            {routeChange && <LinearProgress color="secondary" className={classes.linearLoading} />}

            {
              //!isProtectedRoute ? (
              <>
                <Component
                  {...pageProps}
                  setSuccessMessage={setSuccessMessage}
                  setErrorMessage={setErrorMessage}
                />
                <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    {successMsg}
                  </Alert>
                </Snackbar>
                <Snackbar open={errors} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    {errorMsg}
                  </Alert>
                </Snackbar>
              </>
              // ) : (
              //   <QueryRender preloadedQuery={preloadedQuery} />
            }
          </themeContext.Provider>
        </ThemeProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default MyApp;
