import Container from '../components/container'
import Posts from '../components/posts'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>ken-dev-blog</title>
        </Head>
        <Header />
        <Container>
          {allPosts.length > 0 && <Posts posts={allPosts} />}
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
