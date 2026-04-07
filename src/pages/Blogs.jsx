import { useEffect, useRef } from 'react';

const blogPost = {
  id: 'upi-payment',
  title: 'The Invisible Wire: How ₹1 Travels Across India in 0.3 Seconds',
  description: `You Tap. They Receive. But What Happens in Between? Every day, over 500 million Indians use UPI without a second thought. But the 300 milliseconds between tapping "Pay" and seeing the green checkmark? That's an engineering marvel hiding in plain sight. Click to read more.`,
  readTime: '15 min read',
  date: '2024',
  category: 'Fintech',
  path: '/blogs/upipayment.html',
  accentColor: '#e8500a'
};

const Blogs = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleReadMore = () => {
    window.location.href = blogPost.path;
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Hero Section - Full screen dark */}
      <div className="relative overflow-hidden bg-[#0d0d0d] border-b border-gray-800">
        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full">
              Deep Dive
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              The Invisible Wire: How{' '}
              <span className="text-orange-500 italic">₹1</span> Travels Across India in{' '}
              <span className="text-orange-500 italic">0.3 Seconds</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every day, over 500 million Indians use UPI without a second thought. But the 300 milliseconds between tapping "Pay" and seeing the green checkmark? That's an engineering marvel hiding in plain sight.
            </p>
            <div className="mt-10 flex justify-center">
              <a 
                href="https://medium.com/@manasviwalia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#faf8f3] text-[#0d0d0d] rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <span>Read more on Medium</span>
                <svg className="w-5 h-5 px-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Blog Cards Section - Beige background for reading */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Blog Card */}
        <article 
          ref={(el) => cardsRef.current[0] = el}
          className="group bg-[#faf8f3] rounded-xl p-8 md:p-12 border border-[#e5e0d5] shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-500 opacity-0 translate-y-8"
          onClick={handleReadMore}
          style={{
            '--accent': blogPost.accentColor
          }}
        >
          {/* Category & Meta */}
          <div className="relative flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span 
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors duration-300"
                style={{ 
                  backgroundColor: `${blogPost.accentColor}15`,
                  color: blogPost.accentColor 
                }}
              >
                {blogPost.category}
              </span>
              <span className="text-sm text-gray-500">{blogPost.date}</span>
            </div>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blogPost.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="relative text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-5 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
            {blogPost.title}
          </h2>

          {/* Description - Larger font, black text */}
          <p className="relative text-lg text-gray-900 leading-relaxed mb-8">
            {blogPost.description}
          </p>

          {/* Footer */}
          <div className="relative flex items-center justify-between pt-6 border-t border-gray-200">
            <span className="text-base font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300 flex items-center gap-2">
              Read more
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Decorative Arrow */}
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
              <svg 
                className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>

        {/* More Stories CTA */}
        <div className="mt-20 text-center border-t border-[#e5e0d5] pt-16">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Want more insights?</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            I write regularly about tech, finance, and engineering on Medium. Join the conversation there for deeper dives.
          </p>
          <a 
            href="https://medium.com/@manasviwalia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#0d0d0d] text-white rounded-full font-medium hover:bg-orange-600 transition-all duration-300 shadow-xl"
          >
            Read more on Medium
            <svg className="w-5 h-5 px-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Blogs;
