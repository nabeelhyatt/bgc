'use client'

import Link from 'next/link'
import { useAuth } from '@/components/AuthProvider'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const { user, login, logout } = useAuth()

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Board Game Scheduler
        </Link>
        <div>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.name}</span>
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={login} variant="outline">
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}

