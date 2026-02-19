import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the shape of your content
export interface ContentData {
  id: string;
  title: string;
  date?: string;       
  description?: string;
  excerpt?: string;    
  tags?: string[];
  tech?: string[];     
  status?: string;     
  link?: string;       
  contentHtml: string;
}

const contentDir = path.join(process.cwd(), 'content');

export function getSortedContent(type: 'logs' | 'forge' | 'arsenal') {
  const dir = path.join(contentDir, type);
  
  if (!fs.existsSync(dir)) {
    return [];
  }

  const fileNames = fs.readdirSync(dir);
  
  // Only process .mdx files to prevent directory read errors
  const allContent = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        // FIX: Added 'id' to the Omit list
        ...(matterResult.data as Omit<ContentData, 'id' | 'contentHtml'>),
      };
    });

  return allContent.sort((a, b) => {
    if (a.date && b.date) return a.date < b.date ? 1 : -1;
    return 0;
  });
}

export async function getContent(type: 'logs' | 'forge' | 'arsenal', id: string) {
  const fullPath = path.join(contentDir, type, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { remark } = await import('remark');
  const html = (await import('remark-html')).default;
  const gfm = (await import('remark-gfm')).default;
  
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<ContentData, 'id' | 'contentHtml'>),
  };
}