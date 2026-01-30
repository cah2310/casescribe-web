import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Section } from "@/components/marketing/section";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <Section>
      <article className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-slate prose-blue mt-10 max-w-none prose-headings:tracking-tight prose-a:text-blue-600">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>

        {/* Post footer */}
        <div className="mt-16 border-t pt-8">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              &larr; All Posts
            </Link>
            <Link
              href="/demo"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Book a Demo &rarr;
            </Link>
          </div>
        </div>
      </article>
    </Section>
  );
}
