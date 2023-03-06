import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <div>Hello, {user ? user.name : 'dear visitor'}!</div>
      {user
        ? <div><a href='/api/auth/logout'>Log out</a></div>
        : <div><a href='/api/auth/login'>Log in</a></div>
      }
    </div>
  )
}