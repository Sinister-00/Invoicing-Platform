import Wrapper from './wrapper';
import Button from 'components/button';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'entities/routes';

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data"> Welcome to </p>
            <h1> Plotline </h1>
            <p>
              Welcome to Plotline, where passion for product meets unparalleled customer
              service. Our handpicked products collection reflects our commitment to
              quality and style.Join us in exploring a world of products and services
              that&apos;s thoughtfully curated for your unique taste. At Brand, we&apos;re
              more than a shopping destination – we&apos;re a community dedicated to
              enhancing your product experience. Join us today and discover the
              difference.
            </p>
            <NavLink to={ROUTES.PRODUCTS}>
              <Button>Shop here</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img src="images/hero.jpg" alt="hero-section" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
