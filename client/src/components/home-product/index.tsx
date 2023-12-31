import formatPrice from 'helpers/format-price';
import { NavLink } from 'react-router-dom';

const Product: React.FC<any> = (props) => {
  const { id, name, image, price, category } = props;
  return (
    <NavLink to={`/single-product/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{formatPrice(price)}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
