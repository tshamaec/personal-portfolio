import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>Here's a quick background on me using My Portfolio</p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul className="portfolio-filters isotope-filters">
            <li data-filter="*" className="filter-active"></li>
          </ul>
          {/* End Portfolio Filters */}
          <div className="row gy-4 isotope-container">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/app-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/app-1.jpg"
                    title="App 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/product-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/product-1.jpg"
                    title="Product 1"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/branding-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/branding-1.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/books-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/books-1.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/app-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/app-2.jpg"
                    title="App 2"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/product-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/product-2.jpg"
                    title="Product 2"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/branding-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/branding-2.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/books-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/books-2.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/app-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/app-3.jpg"
                    title="App 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/product-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/product-3.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/branding-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/branding-3.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/books-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="assets/img/portfolio/books-3.jpg"
                    title="Branding 3"
                    data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
