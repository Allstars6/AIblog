import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
          AI Blog
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
          探索人工智能、编程技术与生活思考的交汇点
        </p>
      </section>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted text-lg">还没有文章，敬请期待...</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}