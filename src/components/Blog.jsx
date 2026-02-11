import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "Building a NASA Space Apps Challenge Winning Project",
    excerpt: "How we built a real-time weather event planner using NASA Earth data, Meteomatics API, and modern web technologies to win the Galactic Problem Solver award.",
    date: "2024-10-15",
    readTime: "5 min read",
    category: "Project Case Study",
    slug: "nasa-space-apps-challenge-winner",
    tags: ["Python", "Flask", "NASA", "API Integration", "Weather Data"],
    image: "/blog/nasa-project.jpg"
  },
  {
    id: 2,
    title: "My Journey from Nepal to Software Engineering at UW-Green Bay",
    excerpt: "The story of how I became passionate about software development, my path to UW-Green Bay, and the experiences that shaped my career in technology.",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Personal Story",
    slug: "journey-to-software-engineering",
    tags: ["Career", "Education", "Student Life", "Technology"],
    image: "/blog/journey.jpg"
  },
  {
    id: 3,
    title: "Building Event-Driven Systems with Apache Kafka and Spring Boot",
    excerpt: "Deep dive into creating scalable transaction processing systems using Kafka consumers, Spring Boot, and microservices architecture.",
    date: "2024-12-20",
    readTime: "10 min read",
    category: "Technical Tutorial",
    slug: "kafka-spring-boot-microservices",
    tags: ["Java", "Spring Boot", "Kafka", "Microservices", "Backend"],
    image: "/blog/kafka-tutorial.jpg"
  },
  {
    id: 4,
    title: "Leadership Lessons from Starting GDG on Campus at UW-Green Bay",
    excerpt: "What I learned while co-founding and leading the Google Developer Group chapter, recruiting members, and organizing technical workshops.",
    date: "2025-11-30",
    readTime: "6 min read",
    category: "Leadership",
    slug: "gdg-leadership-lessons",
    tags: ["Leadership", "GDG", "Community Building", "Tech Events"],
    image: "/blog/gdg.jpg"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Articles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts on software development, project experiences, and lessons learned
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
              className="bg-slate-800/80 backdrop-blur border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📝</div>
                  <p className="text-gray-400 text-sm">{post.category}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors"
                  itemProp="headline"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed" itemProp="description">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendar className="text-cyan-400" />
                    <time dateTime={post.date} itemProp="datePublished">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-cyan-400" />
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-900/50 text-gray-400 text-xs rounded"
                      itemProp="keywords"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <motion.a
                  href={`/blog/${post.slug}`}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                  itemProp="url"
                >
                  Read Full Article
                  <FaArrowRight className="text-xs" />
                </motion.a>
              </div>

              {/* Hidden metadata for SEO */}
              <meta itemProp="author" content="Sumit Karki" />
              <meta itemProp="dateModified" content={post.date} />
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">More articles coming soon!</p>
          <motion.a
            href="https://github.com/sumitkarki07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
          >
            Follow for Updates
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
