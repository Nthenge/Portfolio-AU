import React from 'react';

const Testimonials = () => {
  const testimonialsItems = [
    {
      quoteContent: { en: 'Testimonial content 1' },
      quoteAuthor: { en: 'Client 1' },
      jobTitle: { en: 'Job Title 1' },
      imgUrl: 'path/to/image1.jpg',
    },
    // Add more testimonial items as needed
  ];

  return (
    <div className="testimonials-section section" tabIndex="-1">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">testimonials</span>
          <h2 className="title">
            Check What's My Clients
            <br />
            Say About Me
          </h2>
        </div>
      </div>

      <div className="section-content">
        <ul className="testimonials-items" data-staggerdelay="500">
          {testimonialsItems.map((item) => (
            <li key={item.quoteAuthor.en} className="has-ultimate-tooltip" tabIndex="0">
              <div className="testimonials-item">
                <div className="testimonial-author-img">
                  <img src={item.imgUrl || 'assets/images/testimonials/anonymous-user.png'} alt={item.quoteAuthor.en} />
                </div>
                <div className="ultimate-tooltip">
                  <p>{item.quoteContent.en}</p>
                  <h4 className="ultimate-tooltip-title">{item.quoteAuthor.en}</h4>
                  <h5 className="ultimate-tooltip-subtitle">{item.jobTitle.en}</h5>
                </div>
                <div className="ultimate-tooltip-arrow"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
