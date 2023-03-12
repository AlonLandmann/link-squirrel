import { useState } from 'react'
import css from '@/scss/LinkForm.module.scss'

export default function LinkForm({ setFormInView }) {
  const [formData, setFormData] = useState({
    title: '',
    href: '',
    type: '',
    status: ''
  })

  function handleChange(event) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))
  }
  function handleSubmit(event) {
    event.preventDefault()

    const links = JSON.parse(localStorage.getItem('links')) || []

    links.push(formData)
    localStorage.setItem('links', JSON.stringify(links))
    setFormInView(false)
  }

  return (
    <div className={css.popUpFormContainer}>
      <div className={css.popUpForm}>
        <h2>Link Form</h2>
        <div
          className={css.escapeFormButton}
          onClick={() => { setFormInView(false) }}
        >
          <i className='bi bi-x-lg soft-link'></i>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name='title'
            value={formData.title}
            onChange={handleChange}
            type='text'
            placeholder='title'
          />
          <input
            name='href'
            value={formData.href}
            onChange={handleChange}
            type='text'
            placeholder='url'
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
          <button>add link</button>
        </form>
      </div>
    </div>
  )
}