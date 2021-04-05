import Head from 'next/head'
import Header from '../components/Header'
import TodoAddForm from '../components/TodoAddForm'
import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div className="max-w-lg mx-auto p-3">
      <Head>
        <title>Next Context Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <TodoList />
      <TodoAddForm />
    </div>
  )
}
