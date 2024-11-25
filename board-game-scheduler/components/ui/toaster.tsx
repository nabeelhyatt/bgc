'use client'

import { useToast } from './use-toast'

export function Toaster() {
  const { toast } = useToast()

  if (!toast) return null

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${
      toast.type === 'success' ? 'bg-green-500' :
      toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`}>
      {toast.message}
    </div>
  )
}

