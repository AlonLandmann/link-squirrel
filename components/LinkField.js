import css from '@/scss/LinkField.module.scss'

export default function LinkField({ title, href, type, status }) {
  return (
    <div className={css.link}>
      <div className={css.type}><i className={`bi bi-${type}`}></i></div>
      <div className={css.title}>{title}</div>
      <div className={css.status}>
        <div className={status === 'saved' && css.selected}>
          <i className='bi bi-bookmark'></i>
        </div>
        <div className={status === 'in focus' && css.selected}>
          <i className='bi bi-eyeglasses'></i>
        </div>
        <div className={status === 'completed' && css.selected}>
          <i className='bi bi-check-all'></i>
        </div>
      </div>
    </div>
  )
}