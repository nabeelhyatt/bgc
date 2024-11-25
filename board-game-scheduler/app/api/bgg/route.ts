import { NextResponse } from 'next/server'
import { XMLParser } from 'fast-xml-parser'

const BGG_API_URL = 'https://boardgamegeek.com/xmlapi2/thing?stats=1&id='

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'BGG ID is required' }, { status: 400 })
  }

  try {
    const response = await fetch(`${BGG_API_URL}${id}`)
    const xmlData = await response.text()
    
    const parser = new XMLParser()
    const result = parser.parse(xmlData)

    if (!result.items || !result.items.item) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 })
    }

    const game = result.items.item
    const rating = game.statistics.ratings.average.value

    return NextResponse.json({ rating })
  } catch (error) {
    console.error('Error fetching BGG data:', error)
    return NextResponse.json({ error: 'Failed to fetch BGG data' }, { status: 500 })
  }
}

