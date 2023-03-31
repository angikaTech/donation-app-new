import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header1 from '@/copmonent/website/header1'
import Footer1 from '@/copmonent/website/footer1'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
          {/* slider start */}
          <div class="header-dark">
            <Header1 />
            <div class="container hero" style={{ height: "100mv" }}>
              <div class="row" >
                <div class="col-md-8 offset-md-2">
                  <h1 class="text-center">The Revolution is Here.</h1>
                  <div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item"></iframe></div>
                </div>
              </div>
            </div>
          </div>
          {/* slider end */}


          <div className="content-wrapper ">
            <div className="row">
              <div className='container'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
            </div>
          </div>




        </div>
      </main>
      <Footer1 />
    </>
  )
}
