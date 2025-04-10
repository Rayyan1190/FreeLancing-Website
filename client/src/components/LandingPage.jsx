import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <div className="logo-line"></div>
          <h1 className="logo-text">SkillBridge</h1>
        </div>
        <nav className="nav-links">
          <div className="dropdown-group">
            <span className="dropdown-trigger">Hire Talent ▾</span>
          </div>
          <a href="#">Clients</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <div className="auth-links">
            <a href="#">Log In</a>
            <span className="divider">|</span>
            <a href="#">Sign up</a>
            <a href="#" className="freelancer-btn">
              Apply as a Freelancer
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        {/* Text */}
        <div className="hero-text">
          <h2 className="hero-title">
            The Bridge<br />
            Between Talent,<br />
            Work and Growth
          </h2>
          <p className="hero-description">
            Hire world-class freelancers, collaborate on real-world projects, or level up with peer-driven learning — all in one place.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">
              Hire Top Talent
            </button>
            <button className="secondary-btn">
              Start Learning
            </button>
          </div>
          <section className="why-skill-bridge">
      <div className="stats">
        <div className="stat-box">
          <img src="/icons/globe-icon.svg" alt="States" />
          <div>
            <h3>5+</h3>
            <p>States Served</p>
          </div>
        </div>
        <div className="stat-box">
          <img src="/icons/file-icon.svg" alt="Clients" />
          <div>
            <h3>250+</h3>
            <p>Clients Served</p>
          </div>
        </div>
        <div className="stat-box">
          <img src="/icons/file-icon.svg" alt="Orders" />
          <div>
            <h3>350+</h3>
            <p>Orders Served</p>
          </div>
        </div>
      </div>
      
    </section>
        </div>

        {/* Image Stack */}
        <div className="image-stack">
          {/* Background rotated cards */}
          <div className="rotated-card card-1">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="office 2"
            />
          </div>
          <div className="rotated-card card-2">
            <img
              src="https://images.unsplash.com/photo-1581093588401-58c3d1f53c6e"
              alt="office 1"
            />
          </div>
          {/* Main image */}
          <div className="main-image">
            <img
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0"
              alt="main meeting"
            />
          </div>
        
        </div>
       
      
      </main>
      <div className="skill-bridge-container">
      <div className="skill-bridge-header">
        <h1>Why Skill Bridge</h1>
        <p>A smarter way to work, build, and grow.</p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon post-icon"></div>
          <h3>Post, Hire, Build</h3>
          <p>
            Whether you're a startup or a solo founder, post your job and get matched with skilled freelancers fast.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon talent-icon"></div>
          <h3>Elite Talent, On Demand</h3>
          <p>
            Find vetted developers, designers, writers, and more – handpicked to deliver excellence.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon teach-icon"></div>
          <h3>Teach or Learn. Your Call.</h3>
          <p>
            Share your expertise as a coach or level up by learning directly from pros.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon project-icon"></div>
          <h3>Project-Driven Learning</h3>
          <p>
            Go beyond passive tutorials. Learn by building. Grow by collaborating.
          </p>
        </div>
      </div>
    </div>



    <div className="learning-platform">
    <div className="lhero-section">
  <h1 className="lhero-title">Learning should feel like <br /> building something real.</h1>
  <p className="lhero-subtitle">
    From self-paced courses to live sessions with coaches — build <br /> your skill stack with confidence.
  </p>
</div>

      <div className="category-tabs">
        <button className="category-tab active">
          <span className="icon">⚡</span>
          <span>Machine Learning</span>
        </button>
        <button className="category-tab">
          <span className="icon">&#60;/&#62;</span>
          <span>Developers</span>
        </button>
        <button className="category-tab">
          <span className="icon">✎</span>
          <span>Designers</span>
        </button>
        <button className="category-tab">
          <span className="icon">☁</span>
          <span>Cloud & DevOps</span>
        </button>
        <button className="category-tab">
          <span className="icon">📊</span>
          <span>Data Science & Analytics</span>
        </button>
        <button className="category-tab">
          <span className="icon">📈</span>
          <span>Business & Growth</span>
        </button>
      </div>

      <div className="courses-container">
        <div className="course-card">
          <h3 className="course-title">Build Your First AI Assistant with Python & OpenAI</h3>
          <div className="course-meta">
            <div className="course-verified">
              <span className="verified-icon">✓</span>
              <span>Verified</span>
            </div>
            <div className="course-rating">
              <span className="star-icon">★</span>
              <span>4.8 (99)</span>
            </div>
          </div>
          <div className="course-level">
            <div className="level-text">Beginner → Intermediate</div>
            <div className="recommend">Recommend Experience <span className="info-icon">ⓘ</span></div>
          </div>
          <div className="course-duration">
            <div className="duration-label">Duration</div>
            <div className="duration-time">5 hours</div>
          </div>
          <div className="course-tags">
            <span className="tag">DevOps</span>
            <span className="tag">Git</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Node.js</span>
          </div>
          <div className="arrow-icon">→</div>
        </div>

        <div className="course-card">
          <h3 className="course-title">Computer Vision with Python & YOLOv8</h3>
          <div className="course-meta">
            <div className="course-verified">
              <span className="verified-icon">✓</span>
              <span>Verified</span>
            </div>
            <div className="course-rating">
              <span className="star-icon">★</span>
              <span>4.8 (99)</span>
            </div>
          </div>
          <div className="course-level">
            <div className="level-text">Intermediate</div>
            <div className="recommend">Recommend Experience <span className="info-icon">ⓘ</span></div>
          </div>
          <div className="course-duration">
            <div className="duration-label">Duration</div>
            <div className="duration-time">6 hours</div>
          </div>
          <div className="course-tags">
            <span className="tag">DevOps</span>
            <span className="tag">Git</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Node.js</span>
          </div>
          <div className="arrow-icon">→</div>
        </div>

        <div className="course-card">
          <h3 className="course-title">Build Your First AI Assistant with Python & OpenAI</h3>
          <div className="course-meta">
            <div className="course-verified">
              <span className="verified-icon">✓</span>
              <span>Verified</span>
            </div>
            <div className="course-rating">
              <span className="star-icon">★</span>
              <span>4.8 (99)</span>
            </div>
          </div>
          <div className="course-level">
            <div className="level-text">Intermediate to Advanced</div>
            <div className="recommend">Recommend Experience <span className="info-icon">ⓘ</span></div>
          </div>
          <div className="course-duration">
            <div className="duration-label">Duration</div>
            <div className="duration-time">7.5 hours</div>
          </div>
          <div className="course-tags">
            <span className="tag">DevOps</span>
            <span className="tag">Git</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Node.js</span>
          </div>
          <div className="arrow-icon">→</div>
        </div>

        <div className="discover-card">
          <div className="chart-icon">📊</div>
          <h3 className="discover-title">Discover 2,000+ More Courses</h3>
          <button className="explore-button">Explore Learning Options</button>
        </div>
      </div>
    </div>

    <div className="testimonials-container">
      <h1 className="testimonials-title">Your Satisfaction is Our Top Priority</h1>
      <p className="testimonials-subtitle">
        We have a reputation for helping clients around the world find success on their most important projects
      </p>
      
      <div className="testimonials-rating-summary">
        <span className="testimonials-rating-text">Our customers say</span>
        <span className="testimonials-rating-excellent">Excellent</span>
        <div className="testimonials-rating-stars">
          <span className="testimonials-star">★</span>
          <span className="testimonials-star">★</span>
          <span className="testimonials-star">★</span>
          <span className="testimonials-star">★</span>
          <span className="testimonials-star-half">★</span>
        </div>
        <span className="testimonials-rating-score">4.8 out of 5 based on 1,691 reviews</span>
      </div>
      
      <div className="testimonials-cards-container">
        {/* First Testimonial */}
        <div className="testimonials-card">
          <div className="testimonials-quote-icon">❝</div>
          <h3 className="testimonials-card-title">SkillBridge is my go-to source</h3>
          <p className="testimonials-card-content">
            SkillBridge is my go-to source for finding high-quality talent and for companies. I've been very impressed with the breadth of talent they have been able to deliver.
          </p>
          <div className="testimonials-card-stars">
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
          </div>
          <p className="testimonials-card-author">Tess Caputo</p>
        </div>
        
        {/* Second Testimonial */}
        <div className="testimonials-card">
          <div className="testimonials-quote-icon">❝</div>
          <h3 className="testimonials-card-title">Creating an app for the game</h3>
          <p className="testimonials-card-content">
            With the pressure on and millions watching the Championship Sunday, I knew that I needed help. SkillBridge delivered the talent and expertise needed to launch a brand-new fan engagement platform.
          </p>
          <div className="testimonials-card-stars">
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
          </div>
          <p className="testimonials-card-author">Conor Kenney</p>
        </div>
        
        {/* Third Testimonial */}
        <div className="testimonials-card">
          <div className="testimonials-quote-icon">❝</div>
          <h3 className="testimonials-card-title">I have been working with SkillBridge...</h3>
          <p className="testimonials-card-content">
            I have been working with SkillBridge engineers for several years now and they've always been highly talented, very professional, highly productive, great team players, good communications, and willing to go above and beyond to resolve any issues. Quality is great overall and they have never felt like "outsiders". SkillBridge as organization has been professional and easy to work with.
          </p>
          <div className="testimonials-card-stars">
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
            <span className="testimonials-card-star">★</span>
          </div>
          <p className="testimonials-card-author">Ian Stokes-Rees</p>
        </div>
      </div>
    </div>
    


    <div className="banner_container">
      <div className="banner_content">
        <p className="banner_text">Top talent is in high demand.</p>
        <button className="banner_button">Start Hiring</button>
      </div>
    </div>

    <footer className="skill_footer">
      <div className="skill_footer_container">
        <div className="skill_footer_columns">
          <div className="skill_footer_column">
            <h3 className="skill_footer_heading">Build Your Team</h3>
            <div className="skill_footer_lists">
              <ul className="skill_footer_list">
                <li className="skill_footer_item">Software Developers</li>
                <li className="skill_footer_item">Web Developers</li>
                <li className="skill_footer_item">Mobile App Developers</li>
                <li className="skill_footer_item">iOS Developers</li>
                <li className="skill_footer_item">AI Engineers</li>
                <li className="skill_footer_item">Node.js Developers</li>
                <li className="skill_footer_item">PHP Developers</li>
                <li className="skill_footer_item">React.js Developers</li>
                <li className="skill_footer_item">Angular.JS Developers</li>
                <li className="skill_footer_item">Python Developers</li>
              </ul>
              <ul className="skill_footer_list">
                <li className="skill_footer_item">Full-stack Developers</li>
                <li className="skill_footer_item">Front-end Developers</li>
                <li className="skill_footer_item">UX Designers</li>
                <li className="skill_footer_item">UI Designers</li>
                <li className="skill_footer_item">Web Designers</li>
                <li className="skill_footer_item">Mobile App Designers</li>
                <li className="skill_footer_item">Graphic Designers</li>
                <li className="skill_footer_item">Brand Designers</li>
                <li className="skill_footer_item">SEO Experts</li>
                <li className="skill_footer_item">Content Creators</li>
              </ul>
            </div>
          </div>
          
          <div className="skill_footer_column">
            <h3 className="skill_footer_heading">Learn</h3>
            <ul className="skill_footer_list">
              <li className="skill_footer_item">Machine Learning</li>
              <li className="skill_footer_item">Web Development</li>
              <li className="skill_footer_item">App Development</li>
              <li className="skill_footer_item">Cloud & DevOps</li>
              <li className="skill_footer_item">Data Science & Analytics</li>
              <li className="skill_footer_item">UI/UX & Product Design</li>
            </ul>
          </div>
          
          <div className="skill_footer_column">
            <h3 className="skill_footer_heading">About</h3>
            <ul className="skill_footer_list">
              <li className="skill_footer_item">Why Skill Bridge</li>
              <li className="skill_footer_item">Contact Us</li>
              <li className="skill_footer_item">Careers</li>
              <li className="skill_footer_item">About Us</li>
            </ul>
          </div>
        </div>
        
        <div className="skill_footer_bottom">
          <div className="skill_footer_logo_container">
            <div className="skill_footer_logo">
              <span className="skill_footer_logo_accent">||</span>SkillBridge
            </div>
            <p className="skill_footer_tagline">A smarter way to work, build, and grow.</p>
          </div>
        </div>
        
        <div className="skill_footer_copyright">
          <p className="skill_footer_copyright_text">© Copyright 2025 Skill Bridge, LLC</p>
          <div className="skill_footer_links">
            <a href="#" className="skill_footer_link">Privacy Policy</a>
            <a href="#" className="skill_footer_link">Website Terms</a>
            <a href="#" className="skill_footer_link">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}