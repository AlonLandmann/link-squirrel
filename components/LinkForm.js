import { useState } from 'react'
import css from '@/scss/LinkForm.module.scss'

export default function LinkForm({ setLinks, setFormInView }) {
  const [formData, setFormData] = useState(
    {
      title: '',
      href: '',
      type: '',
      status: ''
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

    let links = JSON.parse(localStorage.getItem('links')) || []

    links.push(formData)
    localStorage.setItem('links', JSON.stringify(links))
    setLinks(links)
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