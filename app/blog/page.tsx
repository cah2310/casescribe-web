import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/marketing/section";
import { getAllPosts } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI in legal tech, VA disability claims, and product updates from the CaseScribe team.",
};

const categoryLabels: Record<string, string> = {
  company: "Company",
  product: "Product",
  "legal-tech": "Legal Tech",
  "va-claims": "VA Claims",
  tutorial: "Tutorial",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section>
      <SectionHeader
        eyebrow="Blog"
        title="Insights & Updates"
        description="AI in legal tech, VA disability claims strategy, and product updates from the CaseScribe team."
      />

      {posts.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            Blog posts coming soon. Check back shortly.
          </p>
        </div>
      ) : (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border bg-white overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <span className="text-xs text-blue-400">
                  {post.image ? "Featured Image" : "CaseScribe"}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-blue-700 font-medium">
                    {categoryLabels[post.category] || post.category}
                  </span>
                  <time>{post.date}</time>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                  Read more <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
