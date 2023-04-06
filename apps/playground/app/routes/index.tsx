import { Header } from 'header'
import { Footer } from 'footer'
import { hello } from 'shared'

export default function Index() {
  return (
    <>
      <Header />
      <div onClick={() => hello()}>Content!</div>
      <Footer />
    </>
  )
}
