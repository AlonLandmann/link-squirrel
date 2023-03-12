import { useUser } from '@auth0/nextjs-auth0/client'
import css from '@/scss/Navbar.module.scss'

export default function Navbar() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div className={css.container}>
      <div className={css.center}>
        <div>link squirrel</div>
        <div className={css.navLinks}>
          <div>About</div>
          <div>Contact</div>
          {user
            ? <div><a href='/api/auth/logout'>Log out</a></div>
            : <div><a href='/api/auth/login'>Log in</a></div>
          }
        </div>
      </div>
    </div>
  )
}