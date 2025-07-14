
import { Navigation } from "@/components/Navigation";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My Journey into Computer Science",
      excerpt: "Reflecting on my first year at NIAT and the exciting world of programming that lies ahead.",
      date: "December 2024",
      readTime: "5 min read",
      category: "Academic",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Why I Want to Become an IAS Officer",
      excerpt: "The passion behind my dream to serve the nation and make a positive impact on society.",
      date: "November 2024",
      readTime: "7 min read",
      category: "Career",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Balancing Gaming and Studies",
      excerpt: "How I manage my time between academics, gaming, and personal interests as a student.",
      date: "November 2024",
      readTime: "4 min read",
      category: "Lifestyle",
      color: "from-green-500 to-blue-500"
    },
    {
      id: 4,
      title: "Book Recommendations for Students",
      excerpt: "A curated list of books that have inspired me and can help fellow students grow.",
      date: "October 2024",
      readTime: "6 min read",
      category: "Books",
      color: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thoughts, experiences, and insights from a Computer Science student with big dreams!
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen size={24} />
                <span className="text-sm font-semibold">FEATURED POST</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Welcome to My Digital Space!</h2>
              <p className="text-xl mb-6 leading-relaxed">
                This is where I share my journey as a CSE student, my aspirations to become an IAS officer, 
                and my thoughts on everything from technology to books and gaming. Join me as I document 
                this exciting chapter of my life!
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Read More <ArrowRight className="inline ml-2" size={16} />
              </button>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`bg-gradient-to-r ${post.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                  Read Full Post <ArrowRight className="inline ml-1" size={16} />
                </button>
              </article>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">More Posts Coming Soon!</h3>
              <p className="text-xl text-gray-600 mb-8">
                I'm constantly learning and growing. Stay tuned for more insights, experiences, and stories!
              </p>
              <Link 
                to="/#contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
