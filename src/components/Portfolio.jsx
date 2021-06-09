import React from 'react';





export default ({ portfolioLinks }) => {
    return (      
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Lista życzeń</h2>
              <h3 className="section-subheading text-muted">Możliwość edycji</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ title, price, imgAdres }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" >
                            <img className="img-fluid" src={ imgAdres } alt="items_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ price }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}