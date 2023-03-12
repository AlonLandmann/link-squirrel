import Navbar from './Navbar'
import css from '@/scss/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className={css.mainSection}>
        <div className={css.links}>
          <div className={css.link}>
            <div className={css.image}><i className='bi bi-book'></i></div>
            <div className={css.name}>Linear Algebra Done Right</div>
            <button>edit</button>
            <button>delete</button>
            <div><i className='bi bi-bookmark'></i></div>
            <div><i className='bi bi-arrow-right'></i></div>
            <div><i className='bi bi-bookmark-check-fill'></i></div>
          </div>
          <div className={css.link}>
            <div className={css.image}><i className='bi bi-book'></i></div>
            <div className={css.name}>Linear Algebra Done Right</div>
            <button>edit</button>
            <button>delete</button>
            <div><i className='bi bi-bookmark'></i></div>
            <div><i className='bi bi-arrow-right'></i></div>
            <div><i className='bi bi-bookmark-check-fill'></i></div>
          </div>
          <div className={css.link}>
            <div className={css.image}><i className='bi bi-book'></i></div>
            <div className={css.name}>Linear Algebra Done Right</div>
            <button>edit</button>
            <button>delete</button>
            <div><i className='bi bi-bookmark'></i></div>
            <div><i className='bi bi-arrow-right'></i></div>
            <div><i className='bi bi-bookmark-check-fill'></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}