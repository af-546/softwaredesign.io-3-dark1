import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/ui/Reveal";

export function BlogPreview() {
  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container flex justify-between items-end mb-12">
        <div>
          <p className="eyebrow mb-4">Journal</p>
          <h2 className="heading-lg">Insights from the studio</h2>
        </div>
        <Link to="/blog" className="btn-ghost text-sm hidden sm:inline-flex" data-cursor="pointer">
          All articles →
        </Link>
      </Reveal>
      <div className="section-container grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link
              to={`/blog/${post.slug}`}
              className="bento-card block h-full group"
              data-cursor="pointer"
            >
              <span className="font-mono text-[10px] text-brand-light uppercase">{post.category}</span>
              <h3 className="font-display font-semibold mt-3 group-hover:text-gradient transition-all line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-ink-muted mt-2 line-clamp-2">{post.excerpt}</p>
              <span className="text-xs text-ink-muted mt-4 block">{post.readTime} read</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
