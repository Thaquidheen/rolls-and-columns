import { BlogPost } from "@/types/blog";

const sampleContent = [
  {
    heading: "Understanding Storytelling in Social Media",
    text: "In a world flooded with content, storytelling is what makes your brand memorable. On social media, it's not just about promoting products—it's about sharing stories that resonate. Whether you're showcasing a customer journey or sharing the mission behind your business, storytelling humanizes your brand, builds emotional connections, and encourages followers to engage on a deeper level.\n\nPeople are wired to respond to stories. Posts with a narrative hook or emotional appeal tend to receive more comments, likes, and shares compared to purely promotional content. In a world flooded with content, storytelling is what makes your brand memorable. On social media, it's not just about promoting products—it's about sharing stories that resonate.",
  },
  {
    heading: "Key Benefits of Social Media Storytelling",
    text: "In a world flooded with content, storytelling is what makes your brand memorable. On social media, it's not just about promoting products—it's about sharing stories that resonate. Whether you're showcasing a customer journey or sharing the mission behind your business, storytelling humanizes your brand, builds emotional connections, and encourages followers to engage on a deeper level.\n\nPeople are wired to respond to stories. Posts with a narrative hook or emotional appeal tend to receive more comments, likes, and shares compared to purely promotional content. In a world flooded with content, storytelling is what makes your brand memorable.",
  },
  {
    heading: "As have to Achieves Always People",
    text: "In a world flooded with content, storytelling is what makes your brand memorable. On social media, it's not just about promoting products—it's about sharing stories that resonate. Whether you're showcasing a customer journey or sharing the mission behind your business, storytelling humanizes your brand, builds emotional connections, and encourages followers to engage on a deeper level.\n\nPeople are wired to respond to stories. Posts with a narrative hook or emotional appeal tend to receive more comments, likes, and shares compared to purely promotional content. Whether you're showcasing a customer journey or sharing the mission behind your business, storytelling humanizes your brand.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "advanced-excel-skills",
    title: "Best Way to Learn Advanced Excel Skills!",
    description: "Dive into our curated feed for the freshest insights and developments.",
    excerpt: "Master advanced Excel techniques with our comprehensive guide covering formulas, pivot tables, and automation.",
    image: "/images/blog/Rectangle 22503.png",
    featuredImage: "/images/blog/Rectangle 22504.png",
    imageAlt: "Excel spreadsheet with advanced formulas",
    category: "Tutorial",
    tags: ["Excel", "Advanced", "Formulas", "Productivity"],
    author: {
      name: "Mohammed Alfan",
      role: "Excel Expert & Trainer",
      avatar: "/images/authors/mohammed-alfan.png",
    },
    publishedDate: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    published: true,
    metaTitle: "Best Way to Learn Advanced Excel Skills - Rows & Columns",
    metaDescription: "Master advanced Excel techniques with our comprehensive guide covering formulas, pivot tables, and automation.",
    content: sampleContent,
  },
  {
    id: 2,
    slug: "power-bi-analytics",
    title: "Mastering Data Analytics with Power BI",
    description: "Discover powerful techniques to transform your data visualization skills.",
    excerpt: "Learn how to create stunning dashboards and make data-driven decisions with Power BI.",
    image: "/images/blog/Rectangle 22503 (1).png",
    featuredImage: "/images/blog/Rectangle 22504.png",
    imageAlt: "Power BI dashboard visualization",
    category: "Guide",
    tags: ["Power BI", "Data Analytics", "Visualization", "Dashboard"],
    author: {
      name: "Mohammed Alfan",
      role: "Excel Expert & Trainer",
      avatar: "/images/authors/mohammed-alfan.png",
    },
    publishedDate: "2024-01-10",
    readTime: "6 min read",
    featured: true,
    published: true,
    metaTitle: "Mastering Data Analytics with Power BI - Rows & Columns",
    metaDescription: "Discover powerful techniques to transform your data visualization skills with Power BI.",
    content: sampleContent,
  },
  {
    id: 3,
    slug: "essential-excel-formulas",
    title: "Excel Formulas Every Professional Should Know",
    description: "Essential formulas and functions to boost your productivity.",
    excerpt: "Discover the most important Excel formulas that will supercharge your workflow.",
    image: "/images/blog/Rectangle 22503 (2).png",
    featuredImage: "/images/blog/Rectangle 22504.png",
    imageAlt: "Excel formula examples",
    category: "Tips & Tricks",
    tags: ["Excel", "Formulas", "Productivity", "Tips"],
    author: {
      name: "Mohammed Alfan",
      role: "Excel Expert & Trainer",
      avatar: "/images/authors/mohammed-alfan.png",
    },
    publishedDate: "2024-01-05",
    readTime: "5 min read",
    featured: false,
    published: true,
    metaTitle: "Essential Excel Formulas Every Professional Should Know",
    metaDescription: "Essential formulas and functions to boost your productivity in Excel.",
    content: sampleContent,
  },
  {
    id: 4,
    slug: "excel-automation-tips",
    title: "Automation Tips for Excel Power Users",
    description: "Learn how to automate repetitive tasks and save hours of work.",
    excerpt: "Save time by automating your Excel workflows with macros and advanced features.",
    image: "/images/blog/Rectangle 22503 (3).png",
    featuredImage: "/images/blog/Rectangle 22504.png",
    imageAlt: "Excel automation macros",
    category: "Tutorial",
    tags: ["Excel", "Automation", "Macros", "VBA", "Efficiency"],
    author: {
      name: "Mohammed Alfan",
      role: "Excel Expert & Trainer",
      avatar: "/images/authors/mohammed-alfan.png",
    },
    publishedDate: "2023-12-28",
    readTime: "10 min read",
    featured: false,
    published: true,
    metaTitle: "Automation Tips for Excel Power Users - Rows & Columns",
    metaDescription: "Learn how to automate repetitive tasks and save hours of work with Excel macros.",
    content: sampleContent,
  },
];

// Helper functions
export const getFeaturedBlogs = () => blogPosts.filter(blog => blog.featured && blog.published);
export const getPublishedBlogs = () => blogPosts.filter(blog => blog.published);
export const getBlogBySlug = (slug: string) => blogPosts.find(blog => blog.slug === slug);
export const getBlogsByCategory = (category: string) => blogPosts.filter(blog => blog.category === category && blog.published);
export const getBlogsByTag = (tag: string) => blogPosts.filter(blog => blog.tags.includes(tag) && blog.published);
export const getRelatedBlogs = (currentSlug: string, limit: number = 2) => {
  const currentBlog = getBlogBySlug(currentSlug);
  if (!currentBlog) return [];

  // Find blogs with same category or overlapping tags, excluding current blog
  return blogPosts
    .filter(blog =>
      blog.slug !== currentSlug &&
      blog.published &&
      (blog.category === currentBlog.category ||
       blog.tags.some(tag => currentBlog.tags.includes(tag)))
    )
    .slice(0, limit);
};
