import Head from 'next/head'
import Galery from '../components/Galery'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return <Layout>
    <Hero />
    <Galery />
  </Layout> 
  
}
