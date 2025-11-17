import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { posts } from '@/lib/data';
import { imageMap } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
    return (
        <div className="bg-background">
            <header className="bg-primary/10 py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                        Health News & Blog
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                       Stay informed with the latest health tips, medical news, and updates from TIP-TOP SOLUTION HOSPITAL.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24">
                <div className="container">
                     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => {
                            const postImage = imageMap.get(post.image);
                            return (
                            <Card key={post.id} className="overflow-hidden flex flex-col">
                                {postImage && (
                                <div className="aspect-video relative">
                                    <Image
                                    src={postImage.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={postImage.imageHint}
                                    />
                                </div>
                                )}
                                <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    })}
                                </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                <p className="text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>
                                </CardContent>
                                <CardFooter>
                                <Button variant="outline" asChild>
                                    <Link href={`/blog/${post.slug}`}>
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                </CardFooter>
                            </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
