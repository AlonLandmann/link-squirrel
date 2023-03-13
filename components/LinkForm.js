import { useState } from 'react'
import css from '@/scss/LinkForm.module.scss'

export default function LinkForm({ setLinks, setFormInView }) {
  const [formData, setFormData] = useState(
    {
      title: '',
      href: '',
      type: 'video',
      status: 'saved'
    }
  )

  function handleChange(event) {
    setFormData(prevFormData => (
      {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    ))
  }

  function handleSubmit(event) {
    event.preventDefault()

    setLinks(prevLinks => {
      const newLinks = [...prevLinks, formData]

      localStorage.setItem('links', JSON.stringify(newLinks))
      
      return newLinks
    })

    setFormInView(false)
  }

  return (
    <div className={css.container}>
      <div className={css.popUpField}>
        <div
          className={css.escapeButton}
          onClick={() => { setFormInView(false) }}
        >
          <i className='bi bi-x-lg soft-link'></i>
        </div>
        <h2>
          Link Form
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            name='title'
            type='text'
            placeholder='title'
            value={formData.title}
            onChange={handleChange}
          />
          <input
            name='href'
            type='text'
            placeholder='url'
            value={formData.href}
            onChange={handleChange}
          />
          <select
            name='type'
            value={formData.type}
            onChange={handleChange}
          >
            <option value=''>- type -</option>
            <option value='video'>video</option>
            <option value='text'>text</option>
            <option value='course'>course</option>
            <option value='other'>other</option>
          </select>
          <select
            name='status'
            value={formData.status}
            onChange={handleChange}
          >
            <option value=''>- status -</option>
            <option value='saved'>saved</option>
            <option value='in focus'>in focus</option>
            <option value='completed'>completed</option>
          </select>
          <button>
            add link
          </button>
        </form>
      </div>
    </div>
  )
}