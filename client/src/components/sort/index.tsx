import { BsFillGridFill, BsList } from 'react-icons/bs';
import useFilterStore from 'store/useFilter';

import Wrapper from './wrapper';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterStore();
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? 'active sort-btn' : ' sort-btn'}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          ={' '}
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={(e) => sorting(e as unknown as React.ChangeEvent<HTMLSelectElement>)}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

export default Sort;
