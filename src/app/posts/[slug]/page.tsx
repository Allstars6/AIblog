import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function insertAdIntoHtml(htmlContent: string): string {
  const paragraphs = htmlContent.split("</p>");

  if (paragraphs.length <= 3) {
    return htmlContent;
  }

  const midPoint = Math.floor(paragraphs.length / 2);

  const adHtml = `
<div class="ad-container">
  <span class="ad-label">Advertisement</span>
  <div class="ad-placeholder">
    <p class="font-medium">广告位招租</p>
    <p class="text-xs mt-1">Google AdSense 广告将在此展示</p>
  </div>
</div>`;

  const result = [
    ...paragraphs.slice(0, midPoint),
    `${paragraphs[midPoint]}</p>`,
    adHtml,
    ...paragraphs.slice(midPoint + 1).map((p, i) =>
      i === paragraphs.slice(midPoint + 1).length - 1 ? p : `${p}</p>`
    ),
  ];

  return result.join("\n");
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = insertAdIntoHtml(processedContent.toString());

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        &larr; 返回首页
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-muted mb-4">
            <time dateTime={post.date}>{post.date}</time>
            {post.tags.length > 0 && (
              <>
                <span className="text-border">|</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-bg rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary leading-tight">
            {post.title}
          </h1>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors"
        >
          &larr; 返回首页查看更多文章
        </Link>
      </div>
    </div>
  );
}