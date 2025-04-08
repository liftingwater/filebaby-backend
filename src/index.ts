import Fastify from 'fastify'
import { stringify } from 'querystring';
import { getFileSchema } from './models/files'

const fastify = Fastify({ logger: true })

// Get all of the files
fastify.get('/', async (request, reply) => {
  return { message: 'Filebaby backend is alive!' }
})

// Get a specific file
fastify.get('/:id', {schema: getFileSchema}, async (request: any, reply) => {

    const fileData = {
        id: request.params.id,
        name: "my first file",
        file_data: {},
        path_to_data: "path/to/file.txt", 
        createdAt: "yesterday",
        updatedAt: "today"
    }

    return fileData;
});

// Upload a file
// Create an endpoint for uploading a file

// Delete a file
// Create an endpoint for deleting a file


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
