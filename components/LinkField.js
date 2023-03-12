import { useState } from 'react'
import css from '@/scss/LinkField.module.scss'

export default function LinkField({ title, href, type, initialStatus }) {
  const [status, setStatus] = useState(initialStatus)

  return (
    <div className={css.link}>
      <div className={css.type}><i className={`bi bi-${type}`}></i></div>
      <div className={css.title}>{title}</div>
      <div className={css.status}>
        <div
          className={status === 'saved' && css.selected}
          onClick={() => { setStatus('saved') }}
        >
          <i className='bi bi-bookmark'></i>
        </div>
        <div
          className={status === 'in focus' && css.selected}
          onClick={() => { setStatus('in focus') }}
        >
          <i className='bi bi-eyeglasses'></i>
        </div>
        <div
          className={status === 'completed' && css.selected}
          onClick={() => { setStatus('completed') }}
        >
          <i className='bi bi-check-all'></i>
        </div>
      </div>
    </div>
  )
}