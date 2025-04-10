import { FastifyInstance } from 'fastify'
import { uploadFile } from '../services/files'

export default async function uploadRoutes(fastify: FastifyInstance) {
  fastify.post('/upload', async (request, reply) => {
    const { filename } = request.body as { filename: string }

    try {
      const result = await uploadFile({ filename })
      return result
    } catch (err) {
      request.log.error(err)
      reply.status(400).send({ error: 'Upload failed' })
    }
  })
}