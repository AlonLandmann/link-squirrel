import Navbar from './Navbar'
import css from '@/scss/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <div className={css.center}>
          <h1>Looks like you haven't saved any links yet.</h1>
          <h3>Press the button below to add a new link!</h3>
          <i className='bi bi-link-45deg'></i>
          <button>add new link</button>
        </div>
      </div>

      <div className={css.popUpFormContainer}>
        <div className={css.popUpForm}>
          <h2>Link Form</h2>
          <div className={css.escapeFormButton}>
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
    </div>
  )
}