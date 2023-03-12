import { useUser } from '@auth0/nextjs-auth0/client'
import css from '@/scss/Navbar.module.scss'

export default function Navbar() {
  const { user } = useUser()

  return (
    <div className={css.container}>
      <div className={css.center}>
        <div className={css.logo}>
          <div className={css.linkPartOfLogo}>link</div>
          <div>squirrel</div>
        </div>
        <nav className={css.navLinks}>
          <div>discover</div>
          <div>my links</div>
          <div>contact</div>
        </nav>
        {!user &&
          <div className={css.loginButton}>
            <button onClick={() => { location.replace('api/auth/login') }}>
              Login
            </button>
          </div>
        }
        {user &&
          <div className={css.accountButton}>
            <button onClick={() => { location.replace('api/auth/logout') }}>
              {user.email.slice(0, 2).toUpperCase()}
            </button>
          </div>
        }
      </div>
    </div>
  )
}