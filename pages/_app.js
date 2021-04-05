import '../styles/globals.css'
import TodosContextProvider from '../contexts/TodosContext'

function MyApp({ Component, pageProps }) {
  return (
    <TodosContextProvider>
      <Component {...pageProps} />
    </TodosContextProvider>
  )
}

export default MyApp
