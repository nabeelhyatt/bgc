'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Member } from '@/types/Member'

export default function MemberList() {
  const [members, setMembers] = useState<Member[]>([])

  useEffect(() => {
    // In a real app, this would be an API call
    setMembers([
      {
        id: 1,
        name: 'Andrew Mason',
        photo: '/placeholder.svg?height=100&width=100',
        bio: 'Board game enthusiast and strategy lover.',
        memberSince: '2020-01-01',
      },
      {
        id: 2,
        name: 'Nabeel Hyatt',
        photo: '/placeholder.svg?height=100&width=100',
        bio: 'Enjoys cooperative games and building communities.',
        memberSince: '2019-05-15',
      },
      {
        id: 3,
        name: 'David',
        photo: '/placeholder.svg?height=100&width=100',
        bio: 'Passionate about complex board games and long gaming sessions.',
        memberSince: '2021-03-22',
      },
      // Add 30 more members here...
    ])
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {members.map((member) => (
        <Card key={member.id}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.photo} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{member.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">{member.bio}</p>
            <p className="text-xs text-gray-400">Member since: {member.memberSince}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

