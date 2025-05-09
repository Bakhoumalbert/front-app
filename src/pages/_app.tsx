import { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthUserProvider } from '../context/AuthUserContext';

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <AuthUserProvider>
      <ToastContainer position='top-center' autoClose={8000} transition={Flip} />
      <Component {...pageProps} />;
    </AuthUserProvider>
  )
}

export default MyApp;
