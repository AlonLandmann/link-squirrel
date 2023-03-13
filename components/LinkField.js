import typeToIcon from '@/js/typeToIcon'
import css from '@/scss/LinkField.module.scss'

export default function LinkField({ link, setLinks }) {
  function removeLink(event) {
    event.stopPropagation()

    if (confirm('Are you sure you want to delete this link?')) {
      setLinks(prevLinks => {
        const newLinks = prevLinks.filter(prevLink => prevLink.href !== link.href)

        localStorage.setItem('links', JSON.stringify(newLinks))

        return newLinks
      })
    }
  }

  function handleStatusChange(newStatus) {
    setLinks(prevLinks => {
      const newLinks = prevLinks.map(prevLink => {
        if (prevLink.href === link.href) {
          return { ...prevLink, status: newStatus }
        }

        return { ...prevLink }
      })

      localStorage.setItem('links', JSON.stringify(newLinks))

      return newLinks
    })
  }

  return (
    <div className={css.link}>
      <div onClick={() => { window.open(link.href, '_blank').focus() }}>
        <div className={css.type}>
          <i className={typeToIcon(link.type)}></i>
        </div>
        <div className={css.title}>
          {link.title}
        </div>
        <div className={css.trashIcon} onClick={removeLink}>
          <i className='bi bi-trash3'></i>
        </div>
      </div>
      <div className={css.status}>
        <div
          className={link.status === 'saved' ? css.selected : undefined}
          onClick={() => { handleStatusChange('saved') }}
        >
          <i className='bi bi-bookmark'></i>
        </div>
        <div
          className={link.status === 'in focus' ? css.selected : undefined}
          onClick={() => { handleStatusChange('in focus') }}
        >
          <i className='bi bi-eyeglasses'></i>
        </div>
        <div
          className={link.status === 'completed' ? css.selected : undefined}
          onClick={() => { handleStatusChange('completed') }}
        >
          <i className='bi bi-check-all'></i>
        </div>
      </div>
    </div>
  )
}