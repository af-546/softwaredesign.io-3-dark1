import { Link, useParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getBlogPostBySlug } from "@/data/blog";
import { Reveal } from "@/components/ui/Reveal";
import { NotFoundPage } from "./NotFoundPage";

export function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  usePageTitle(post?.title ?? "Article", post?.excerpt);

  if (!post) return <NotFoundPage />;

  return (
    <article className="section-padding pt-32 pb-20 max-w-3xl mx-auto">
      <Reveal>
        <Link to="/blog" className="text-sm text-neon-cyan hover:underline mb-8 inline-block" data-cursor="pointer">
          ← Back to journal
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] text-brand-light uppercase">{post.category}</span>
          <span className="text-xs text-ink-muted">{post.date} · {post.readTime}</span>
        </div>
        <h1 className="heading-xl mb-8">{post.title}</h1>
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] px-3 py-1 rounded-full bg-white/5 text-ink-muted">
              #{tag}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="prose prose-invert max-w-none">
        {post.content.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="text-ink-soft text-lg leading-relaxed mb-6">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
