import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

async function getPostContent(id: string) {
    const postData = getPostData(id);
    const processedContent = await remark()
        .use(remarkGfm)
        .use(html)
        .process(postData.content);
    const contentHtml = processedContent.toString();
    
    return {
        ...postData,
        contentHtml,
    };
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function Post({ params }: { params: { id: string } }) {
    const { id } = await params; 
    const post = await getPostContent(id);
    return (
        <article className="min-h-screen pt-32 px-6 pb-40 max-w-3xl mx-auto">
            {/* Back Button */}
            <Link href="/logs" className="inline-flex items-center gap-2 text-xs font-mono text-neon-purple hover:text-white mb-12 transition-colors">
                <ArrowLeft size={14} />
                RETURN_TO_LOGS
            </Link>

            {/* Header */}
            <div className="mb-12 border-b border-white/10 pb-8">
                <div className="flex gap-4 text-xs font-mono text-gray-500 mb-6">
                    <span className="text-neon-purple">ID::{post.id}</span>
                    <span className="flex items-center gap-2"><Calendar size={12}/> {post.date}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    {post.title}
                </h1>
                <div className="flex gap-2">
                    {(post.tags as string[]).map(tag => (
                         <span key={tag} className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-400">
                            <Tag size={10} className="inline mr-1"/> {tag}
                         </span>
                    ))}
                </div>
            </div>

            {/* Content Body */}
            {/* Use 'prose' (tailwindcss-typography) if available, or custom styles */}
            <div 
                className="
                        prose prose-invert max-w-none 
                        prose-headings:font-display prose-headings:font-bold prose-headings:text-white 
                        prose-h1:text-4xl prose-h2:text-2xl prose-h2:text-neon-cyan prose-h3:text-neon-purple
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-neon-cyan prose-a:no-underline hover:prose-a:text-white hover:prose-a:underline
                        prose-strong:text-white
                        prose-code:text-neon-purple prose-code:font-mono prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                        prose-pre:bg-cyber-gray prose-pre:border prose-pre:border-white/10 prose-pre:shadow-2xl
                        prose-table:border-collapse prose-th:text-neon-cyan prose-th:border-b prose-th:border-white/10 prose-th:p-4
                        prose-td:border-b prose-td:border-white/5 prose-td:p-4 prose-td:text-gray-400
                    "
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
            />
        </article>
    );
}