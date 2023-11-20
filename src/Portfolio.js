import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredPortfolioItems, setFilteredPortfolioItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('All');
  const [filters, setFilters] = useState(['All']); // Add your actual filters here

  // Dummy data, replace with your actual data
  const dummyPortfolioItems = [
    {
      title: { en: 'Project 1' },
      url: 'https://example.com/project1',
      imgUrl: 'https://via.placeholder.com/300',
      date: { en: '2023-01-01' },
    },
    {
      title: { en: 'Project 2' },
      url: 'https://example.com/project2',
      imgUrl: 'https://via.placeholder.com/300',
      date: { en: '2023-02-01' },
    },
    // Add more portfolio items as needed
  ];

  useEffect(() => {
    // Fetch or set your portfolio items here
    setPortfolioItems(dummyPortfolioItems);
    setFilteredPortfolioItems(dummyPortfolioItems);
  }, []);

  const filterPortfolioItems = (filter) => {
    if (filter === 'All') {
      setFilteredPortfolioItems(portfolioItems);
    } else {
      const filteredItems = portfolioItems.filter((item) => /* Add your filtering logic based on the filter */);
      setFilteredPortfolioItems(filteredItems);
    }

    setCurrentFilter(filter);
  };

  const getPortfolioItems = () => {
    // Implement your logic to fetch more portfolio items
    // Update portfolioItems and filteredPortfolioItems accordingly
  };

  return (
    <div className="portfolio-section section" tabIndex="-1">
      <div className="container">
        <div className="section-content">

          {/* Portfolio items */}
          <ul className="portfolio-items has-works" data-no-works-msg="No works to load">
            <li>
              {/* Text box */}
              <div className="text-box-inline">
                <span className="subtitle">my works</span>
                <h2>
                  See My Works Which
                  <br />
                  Will Amaze You!
                </h2>
                <p>
                  We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.
                </p>
                <ul className="works-filter">
                  {filters.map((filter) => (
                    <li key={filter}>
                      <button
                        className={currentFilter === filter ? 'active' : ''}
                        onClick={() => filterPortfolioItems(filter)}>
                        {filter}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Portfolio items list */}
            {filteredPortfolioItems.map((work) => (
              <li key={work.title.en} className="portfolio-item">
                <a href={work.url} target="_blank" rel="noopener">
                  <div className="item-img">
                    <img src={work.imgUrl} alt={work.title.en} />
                  </div>
                  <div className="item-details">
                    <h3 className="title">{work.title.en}</h3>
                    <div className="date">{work.date.en}</div>
                  </div>
                </a>
              </li>
            ))}
            {/* End of portfolio items list */}

            <li>
              <button className="more" onClick={getPortfolioItems}>Load more works</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
