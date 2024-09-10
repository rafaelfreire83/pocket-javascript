import z from 'zod'

const envSchgema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchgema.parse(process.env)
