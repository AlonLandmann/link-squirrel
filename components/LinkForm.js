import css from '@/scss/LinkForm.module.scss'

export default function LinkForm({ setFormInView }) {
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
        <form>
          <input
            type='text'
            placeholder='url'
          />
          <input
            type='text'
            placeholder='title'
          />
          <select>
            <option value={null} selected>- type -</option>
            <option value='video'>video</option>
            <option value='text'>text</option>
            <option value='course'>course</option>
            <option value='other'>other</option>
          </select>
          <select>
            <option value={null} selected>- status -</option>
            <option value='bookmarked'>bookmarked</option>
            <option value='in focus'>in focus</option>
            <option value='completed'>completed</option>
          </select>
          <button>add link</button>
        </form>
      </div>
    </div>
  )
}