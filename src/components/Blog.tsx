import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Code, Lightbulb } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Memulai Journey sebagai Full Stack Developer',
      excerpt: 'Tips dan trik untuk memulai karir sebagai full stack developer di era digital ini.',
      date: '15 Des 2024',
      readTime: '5 min',
      category: 'Career',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'Optimasi Performance React dengan useMemo',
      excerpt: 'Cara mengoptimalkan performance aplikasi React menggunakan useMemo dan useCallback.',
      date: '10 Des 2024',
      readTime: '7 min',
      category: 'React',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Code,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Tren Teknologi 2024: What to Expect',
      excerpt: 'Menjelajahi tren teknologi terbaru yang akan mendominasi industri di tahun 2024.',
      date: '5 Des 2024',
      readTime: '8 min',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Lightbulb,
      color: 'from-green-500 to-blue-600'
    }
  ];

  return (
    <section id="blog" className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced nebula effects */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Data streams */}
        <div className="absolute top-10 left-1/3 w-1 h-32 bg-gradient-to-b from-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-24 bg-gradient-to-t from-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-1/3 left-20 text-cyan-400/20 text-2xl animate-pulse">&lt;/&gt;</div>
        <div className="absolute bottom-1/3 right-20 text-purple-400/20 text-xl animate-pulse" style={{ animationDelay: '1s' }}>{ }</div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Tech Blog
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Berbagi pengetahuan dan insight tentang dunia teknologi
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Article image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`w-8 h-8 bg-gradient-to-br ${article.color} rounded-lg flex items-center justify-center`}>
                    <article.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-full text-xs text-white border border-gray-700/50">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Meta information */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read more link */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/btn">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all articles button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white font-medium transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;