import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message, source } = body

    // TODO: Integrate with Google Sheets API or Apps Script webhook
    // For now, just log the data
    console.log('Lead received:', {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      message,
      source
    })

    // Placeholder response
    return NextResponse.json({ success: true, message: 'Lead submitted successfully' })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json({ success: false, message: 'Failed to submit lead' }, { status: 500 })
  }
}