import { useEffect, useState } from 'react'
import LinkField from '@/components/LinkField'
import LinkForm from '@/components/LinkForm'
import Navbar from '@/components/Navbar'
import css from '@/scss/Home.module.scss'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [links, setLinks] = useState([])
  const [formInView, setFormInView] = useState(false)

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem('links')))
    setLoading(false)
  }, [])

  if (loading) return <Navbar />

  return (
    <div>
      <Navbar />
      <div className={css.center}>
        {links && links.length > 0 &&
          <>
            <h1>library</h1>
            <div className={css.links}>
              {links.map(link => (
                <LinkField
                  key={link.href}
                  title={link.title}
                  href={link.href}
                  type={link.type}
                  initialStatus={link.status}
                  setLinks={setLinks}
                />
              ))}
            </div>
          </>
        }
        {(!links || links.length === 0) &&
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
      {formInView &&
        <LinkForm
          setLinks={setLinks}
          setFormInView={setFormInView}
        />
      }
    </div>
  )
}