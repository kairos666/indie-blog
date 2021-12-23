import '../styles/globals.scss';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import type { AppProps } from 'next/app';
import Head from 'next/head';

/* APP generic Error handling */
function ErrorFallback({ error }:FallbackProps) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
        </div>
    )
}


/* APP component */
function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Kaïros</title>
                <meta name="description" content="le cabinet de curiosités numériques" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="icon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#fafafa" />
            </Head>
            <ErrorBoundary FallbackComponent={ ErrorFallback }>
                <Component {...pageProps} />
            </ErrorBoundary>
        </>
    );
}

export default App;
