import { Html, Head, Main, NextScript } from 'next/document'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <title>Darnell Garcia - Portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website"
          key="desc"
        />
        <meta property="og:title" content="Darnell Garcia - Portfolio" />
        <meta property="og:description" content="Welcome to my personal portfolio website" />
        <meta property="og:image" content="ZeroDayz77/My-Portfolio-Templeted-Built/public/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://darnellgarcia.vercel.app/" />
      <Head />
      <body className='text-black'>
        <NextScript />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </body>
    </Html>
  )
}
