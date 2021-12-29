import * as jetpack from "fs-jetpack";
import matter from 'gray-matter';

export async function listFilesInFolder(folderPath:string):Promise<string[]> {
    return jetpack.listAsync(folderPath);
}

export async function readFile(filePath:string):Promise<string> {
    return jetpack.readAsync(filePath);
}

export async function parseFrontmatter(src:string):Promise<any> {
    return matter(src);
}