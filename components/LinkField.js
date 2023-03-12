import { useState } from 'react'
import css from '@/scss/LinkField.module.scss'

export default function LinkField({ title, href, type, initialStatus }) {
  const [status, setStatus] = useState(initialStatus)
  const [linkIconInView, setLinkIconInView] = useState(false)

  return (
    <div className={css.link}>
      <div
        onMouseEnter={() => { setLinkIconInView(true) }}
        onMouseLeave={() => { setLinkIconInView(false) }}
        onClick={() => { window.open(href, '_blank').focus() }}
      >
      {linkIconInView &&
        <div className={css.linkIcon}><i className='bi bi-box-arrow-up-right'></i></div>
      }
        <div className={css.type}><i className={`bi bi-${type}`}></i></div>
        <div className={css.title}>{title}</div>
      </div>
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