import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

// 1. Define the Interface for your Post Metadata
export interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string; // The raw markdown body
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // 2. Cast the result to your Interface
    return {
      id,
      ...(matterResult.data as Omit<PostData, 'id' | 'content'>),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 3. Explicitly type the return value here
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