import { describe, it, expect } from 'vitest'
import { uploadFile } from '../src/services/files'

describe('uploadFile()', () => {
  it('returns a download link when given a filename', async () => {
    const result = await uploadFile({ filename: 'example.txt' })

    expect(result).toHaveProperty('success', true)
    expect(result).toHaveProperty('filename', 'example.txt')
    expect(result.downloadLink).toMatch(/^not_a_real_url\/example.txt$/) // Change this to be a mocked URL
  })

  it('throws an error when filename is missing', async () => {
    // @ts-expect-error
    await expect(uploadFile({})).rejects.toThrow('Missing filename')
  })
})