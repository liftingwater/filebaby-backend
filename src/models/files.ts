const getSchema = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      file_data: { type: 'object' },
      path_to_data: {type: 'string'}, 
      // TODO: update the date fields to have the correct formatting
      createdAt: { type: 'string' },
      updatedAt: { type: 'string' }
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