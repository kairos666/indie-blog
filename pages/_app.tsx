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
                {/* SS fonts */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
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
