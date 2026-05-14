import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export default function PostCard({
  slug,
  title,
  date,
  excerpt,
  tags,
}: PostCardProps) {
  return (
    <article className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
      <Link href={`/posts/${slug}`} className="block">
        <div className="flex items-center gap-3 text-xs text-muted mb-3">
          <time dateTime={date}>{date}</time>
          {tags.length > 0 && (
            <>
              <span className="text-border">|</span>
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-bg rounded-full text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors leading-snug">
          {title}
        </h2>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <span className="inline-block mt-4 text-sm font-medium text-accent group-hover:underline">
          阅读更多 &rarr;
        </span>
      </Link>
    </article>
  );
}