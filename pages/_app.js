import { useEffect } from "react";
import AOS from 'aos'

import '../styles/global.css'
import 'aos/dist/aos.css'
// dummy


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
