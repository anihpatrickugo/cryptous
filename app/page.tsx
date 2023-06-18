import Head from 'next/head'
import Header from './components/header'
import Company from './components/company'
import About from './components/about'
import Blog from './components/blog'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Company/>
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>   
    </>
    
  )
}
