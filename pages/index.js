import Head from 'next/head'
import Booklist from '../components/Booklist'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import ThemeContextProvider from '../contexts/ThemeContext'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col items-center py-32">
        {/* <h1 className="text-blue-500 font-bold">
          <a href="https://nextjs.org">!</a>
        </h1> */}

        <ThemeContextProvider>

        <Navbar/>

<Booklist/>

<ThemeToggle/>
        </ThemeContextProvider>

        

        

      </main>

      <footer >
       
      </footer>
    </div>
  )
}
