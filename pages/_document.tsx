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
