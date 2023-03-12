import { useState } from 'react'
import Navbar from '@/components/Navbar'
import LinkField from '@/components/LinkField'
import LinkForm from '@/components/LinkForm'
import css from '@/scss/Home.module.scss'

export default function Home() {
  const [formInView, setFormInView] = useState(false)

  return (
    <div>
      <Navbar />

      <div>
        <div className={css.center}>
          <h1>library</h1>

          <div className={css.links}>
            <LinkField
              title='Essence of Linear Algebra'
              href='https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'
              type='collection-play-fill'
              initialStatus='saved'
            />
            <LinkField
              title='Linear algebra done right'
              href='https://linear.axler.net/'
              type='book'
              initialStatus='in focus'
            />
            <LinkField
              title='Learn React'
              href='https://scrimba.com/learn/learnreact'
              type='laptop'
              initialStatus='completed'
            />
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