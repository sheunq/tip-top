import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '@/lib/data';
import { imageMap } from '@/lib/placeholder-images';
import { Calendar, User } from 'lucide-react';

type BlogPostPageProps = {
    params: {
        slug: string;
    }
}

export function generateStaticParams() {
    return posts.map(post => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = params;
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }
    
    const postImage = imageMap.get(post.image);

    return (
        <article className="bg-card">
            <header className="py-16 bg-primary/10">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{post.title}</h1>
                         <div className="mt-4 flex items-center justify-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>By Tip-Top Solution Hospital Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {postImage && (
                <div className="container -mt-12">
                    <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
                        <Image src={postImage.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={postImage.imageHint} priority />
                    </div>
                </div>
            )}
            
            <div className="container py-16 md:py-24">
                <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-foreground/90">
                    <p>{post.content}</p>
                </div>
            </div>

        </article>
    );
}

// Simple prose styles for markdown content
const proseStyles = `
.prose {
    color: hsl(var(--foreground) / 0.9);
}
.prose h1, .prose h2, .prose h3, .prose h4 {
    color: hsl(var(--foreground));
    font-family: var(--font-headline);
}
.prose a {
    color: hsl(var(--primary));
}
.prose a:hover {
    color: hsl(var(--primary) / 0.8);
}
.prose blockquote {
    border-left-color: hsl(var(--primary));
    color: hsl(var(--muted-foreground));
}
`;

// Add a style tag to the component to inject prose styles
// This is a workaround since we cannot directly edit globals.css from here
export const ProseStyles = () => <style>{proseStyles}</style>;
