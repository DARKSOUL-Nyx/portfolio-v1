import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// CHANGE 1: Update the path to point specifically to "content/logs"
const postsDirectory = path.join(process.cwd(), 'content', 'logs');

export interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
}

export function getSortedPostsData() {
  // Check if directory exists to prevent crashes if folder is missing
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  // CHANGE 2: Filter to only process .mdx files (ignores system files or subfolders)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as Omit<PostData, 'id' | 'content'>),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(id: string): PostData {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as Omit<PostData, 'id' | 'content'>),
  };
}