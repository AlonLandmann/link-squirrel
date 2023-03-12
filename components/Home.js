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
          <i className='bi bi-link-45deg'></i>
          <h1>Looks like you haven't saved any links yet.</h1>
          <h3>Press the button below to add a new link!</h3>
          <button onClick = {() => { setFormInView(true) }}>
            add new link
          </button>
        </div>
      </div>

      {formInView &&
        <LinkForm setFormInView={setFormInView} />
      }
    </div>
  )
}