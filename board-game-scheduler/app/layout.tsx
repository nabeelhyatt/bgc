import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Board Game Club Scheduler',
  description: 'Schedule your next board game night!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">Board Game Club Scheduler</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}

