import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function BlogPage() {
  usePageTitle("Blog", "Design insights and process notes from SoftwareDesign.io");

  return (
    <div className="section-padding pt-32 pb-20 max-w-7xl mx-auto">
      <Reveal className="mb-16">
        <p className="eyebrow mb-4">Journal</p>
        <h1 className="heading-xl">Insights from the studio</h1>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link to={`/blog/${post.slug}`} className="bento-card block group h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-brand-light uppercase">{post.category}</span>
                <span className="text-xs text-ink-muted">{post.date}</span>
              </div>
              <h2 className="font-display text-2xl font-bold group-hover:text-gradient transition-all">
                {post.title}
              </h2>
              <p className="text-ink-soft mt-3 leading-relaxed">{post.excerpt}</p>
              <span className="text-xs text-ink-muted mt-4 block">
                {post.readTime} read · {post.author}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  );
}
