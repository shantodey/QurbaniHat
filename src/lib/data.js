import fs from 'fs/promises';
import path from 'path';

export async function allAnimal() {
    const filePath = path.join(process.cwd(), 'public', 'animal.json');
    const file = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(file);
    return data; 
}