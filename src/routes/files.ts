import { FastifyInstance } from 'fastify';
import { uploadFile } from '../services/files';
import { listFiles } from '../services/files';
import { downloadFile } from '../services/files';
import { deleteFile } from '../services/files';
import { welcomeMessage } from '../services/files';

export default async function filesRoutes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    const result = welcomeMessage();
    return result;
  })

  fastify.post('/upload', async (request, reply) => {
    const result = await uploadFile(request);
    return result;
  });

  fastify.get('/list', async (request, reply) => {
    const files = await listFiles();
    return files;
  });

  fastify.get('/:id/download', async (request: any, reply) => {
    const fileId = request.params.id;
    const file = await downloadFile(fileId);
    return file;
  });

  fastify.delete('/:id', async (request: any, reply) => {
    const fileId = request.params.id;
    const result = await deleteFile(fileId);
    return result;
  });
}
