const getSchema = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      file_data: { type: 'object' },
      path_to_data: {type: 'string'}, 
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' }
    }
  };

export const getFileSchema = {
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' }
      }
    },
    response: {
      200: getSchema,
      404: {
        type: 'object',
        properties: {
          error: { type: 'string' }
        }
      }
    }
  };