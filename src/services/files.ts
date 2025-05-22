import { promises as fs } from 'fs';
import { join } from 'path';

const uploadDir = './uploads';

export async function welcomeMessage() {
  return "Login to use filebaby";
}

export async function uploadFile(request: any) {
  const file = request.file;
  const filePath = join(uploadDir, file.filename);
  await fs.writeFile(filePath, file.buffer);
  return { message: 'File uploaded successfully' };
}

export async function listFiles() {
  const files = await fs.readdir(uploadDir);
  return files;
}

export async function downloadFile(fileId: string) {
  const filePath = join(uploadDir, fileId);
  const fileBuffer = await fs.readFile(filePath);
  return fileBuffer;
}

export async function deleteFile(fileId: string) {
  const filePath = join(uploadDir, fileId);
  await fs.unlink(filePath);
  return { message: 'File deleted successfully' };
}