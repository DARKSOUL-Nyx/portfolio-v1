import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the shape of your content
export interface ContentData {
  id: string;
  title: string;
  date?: string;       // Optional, for sorting
  description?: string;// For cards
  excerpt?: string;    // For blogs
  tags?: string[];
  tech?: string[];     // For Projects
  status?: string;     // Active, Deployed, Archived
  link?: string;       // For external links (GitHub/Demo)
  contentHtml: string;
}

const contentDir = path.join(process.cwd(), 'content');

export function getSortedContent(type: 'logs' | 'forge' | 'arsenal') {
  const dir = path.join(contentDir, type);
  
  // Create directory if it doesn't exist (prevents crashes)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(dir);
  const allContent = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    } as Omit<ContentData, 'contentHtml'>;
  });

  // Sort by date if available, otherwise generic sort
  return allContent.sort((a, b) => {
    if (a.date && b.date) return a.date < b.date ? 1 : -1;
    return 0;
  });
}

export async function getContent(type: 'logs' | 'forge' | 'arsenal', id: string) {
  const fullPath = path.join(contentDir, type, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use generic import for remark to avoid type errors in some setups
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
    ...(matterResult.data as Omit<ContentData, 'contentHtml'>),
  };
}