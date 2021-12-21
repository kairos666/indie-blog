import '../styles/globals.scss';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import Head from 'next/head';
import type { AppProps } from 'next/app';

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
        <ErrorBoundary FallbackComponent={ ErrorFallback }>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                {/* SC fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=WindSong:wght@400;500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Petemoss&display=swap" rel="stylesheet" />
                {/* D fonts */}
            </Head>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
}

export default App;
