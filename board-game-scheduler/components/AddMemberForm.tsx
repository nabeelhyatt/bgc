'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Member } from '@/types/Member'

interface AddMemberFormProps {
  onAddMember: (member: Omit<Member, 'id'>) => void
}

export default function AddMemberForm({ onAddMember }: AddMemberFormProps) {
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [bio, setBio] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddMember({
      name,
      photo: photo || '/placeholder.svg?height=100&width=100', // Use placeholder if no photo provided
      bio,
      memberSince: new Date().toISOString().split('T')[0] // Current date
    })
    setName('')
    setPhoto('')
    setBio('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="photo">Photo URL (optional)</Label>
        <Input id="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
      </div>
      <Button type="submit">Add Member</Button>
    </form>
  )
}

