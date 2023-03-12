import Navbar from './Navbar'
import css from '@/scss/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <div className={css.center}>
          <h1>Looks like you haven't saved any links yet.</h1>
          <h3>Press the button below to add a new link!</h3>
          <i className='bi bi-link-45deg'></i>
          <button>add new link</button>
        </div>
      </div>
    </div>
  )
}