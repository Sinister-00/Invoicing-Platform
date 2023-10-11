import Button from 'components/button';
import { Product } from 'entities/product';
import formatPrice from 'helpers/format-price';
import { NavLink } from 'react-router-dom';

import Wrapper from './wrapper';

const ListView = ({ products }: { products: Product[] }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem, idx: number) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div key={idx} className="card grid grid-two-column">
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p> {formatPrice(price)} </p>
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ListView;
