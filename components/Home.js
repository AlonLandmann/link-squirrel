import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import LinkField from '@/components/LinkField'
import LinkForm from '@/components/LinkForm'
import typeToIcon from '@/js/typeToIcon'
import css from '@/scss/Home.module.scss'

export default function Home() {
  const [formInView, setFormInView] = useState(false)
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem('links')))
    setLoading(false)
  }, [])

  return (
    <div>
      <Navbar />

      <div>
        <div className={css.center}>
          {!loading && links && links.length > 0 &&
            <>
              <h1>library</h1>

              <div className={css.links}>
                {links.map(link => (
                  <LinkField
                    key={link.href}
                    title={link.title}
                    href={link.href}
                    type={typeToIcon(link.type)}
                    initialStatus={link.status}
                    setLinks={setLinks}
                  />
                ))}
              </div>
            </>

          }
          {!loading && (!links || links.length === 0) &&
            <>
              <i className='bi bi-link-45deg'></i>
              <h1>Looks like you haven't saved any links yet.</h1>
              <h3>Press the button below to add your first link!</h3>
            </>
          }
          <button onClick={() => { setFormInView(true) }}>
            add link
          </button>
        </div>
      </div>

      {formInView &&
        <LinkForm setFormInView={setFormInView} setLinks={setLinks} />
      }
    </div>
  )
}