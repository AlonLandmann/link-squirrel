import { useState } from 'react'
import Navbar from '@/components/Navbar'
import LinkForm from '@/components/LinkForm'
import css from '@/scss/Home.module.scss'

export default function Home() {
  const [formInView, setFormInView] = useState(false)

  return (
    <div>
      <Navbar />

      <div>
        <div className={css.center}>

          <div className={css.links}>

            <div className={css.link}>
              <div className={css.type}><i className='bi bi-collection-play-fill'></i>video</div>
              <div className={css.title}>Essence of Linear Algebra</div>
              {/* <a href='https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' target='_blank'>video</a> */}
              <div className={css.status}><i className='bi bi-check-square'></i>completed</div>
            </div>

            <div className={css.link}>
              <div className={css.type}><i className='bi bi-book'></i>text</div>
              <div className={css.title}>Linear algebra done right</div>
              {/* <a href='https://linear.axler.net/' target='_blank'>video</a> */}
              <div className={css.status}><i className='bi bi-eyeglasses'></i>in focus</div>
            </div>

            <div className={css.link}>
              <div className={css.type}><i className='bi bi-laptop'></i>course</div>
              <div className={css.title}>Learn React</div>
              {/* <a href='https://scrimba.com/learn/learnreact' target='_blank'>video</a> */}
              <div className={css.status}><i className='bi bi-bookmark'></i>saved</div>
            </div>

          </div>

          <i className='bi bi-link-45deg'></i>
          <h1>Looks like you haven't saved any links yet.</h1>
          <h3>Press the button below to add your first link!</h3>
          <button onClick={() => { setFormInView(true) }}>
            add link
          </button>
        </div>
      </div>

      {formInView &&
        <LinkForm setFormInView={setFormInView} />
      }
    </div>
  )
}