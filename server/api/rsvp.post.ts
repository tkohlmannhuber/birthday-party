import { appendFile } from 'node:fs/promises'
import { join } from 'node:path'

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

  // On Netlify: use Blobs. Locally: write to file.
  if (process.env.NETLIFY) {
    const { getStore } = await import('@netlify/blobs')
    const store = getStore('rsvps')
    const key = `rsvp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    await store.set(key, JSON.stringify(entry))
  } else {
    const filePath = join(process.cwd(), 'rsvps.jsonl')
    await appendFile(filePath, JSON.stringify(entry) + '\n')
  }

  return { success: true, message: 'RSVP received!' }
})
