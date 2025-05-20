import Fastify from 'fastify'
import filesRoutes from './routes/files'


const fastify = Fastify({ logger: true })

fastify.register(filesRoutes)

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log('Server running at http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
