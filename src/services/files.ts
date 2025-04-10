export async function uploadFile({ filename }: { filename: string }) {
    // This is just a stub for now
    // In reality, you'd stream to S3 here
  
    if (!filename) throw new Error('Missing filename')
  
    // Simulate creating a download URL
    const downloadLink = `not_a_real_url/${filename}`
    return {
      success: true,
      filename,
      downloadLink,
    }
  }
