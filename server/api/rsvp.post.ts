import { getStore } from '@netlify/blobs'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name || !body.attending) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and attendance status are required'
    })
  }

  const entry = {
    timestamp: new Date().toISOString(),
    name: body.name,
    attending: body.attending,
    plusOne: body.plusOne || false,
    song: body.song || '',
    message: body.message || ''
  }

  const store = getStore('rsvps')
  const key = `rsvp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  await store.set(key, JSON.stringify(entry))

  return { success: true, message: 'RSVP received!' }
})
