import "../styles/globals.css";
import { FormProvider } from "../context/FormContext";

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
