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

  // Store RSVPs in a JSON lines file
  const filePath = join(process.cwd(), 'rsvps.jsonl')
  await appendFile(filePath, JSON.stringify(entry) + '\n')

  return { success: true, message: 'RSVP received!' }
})
