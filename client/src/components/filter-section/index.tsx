import Button from 'components/button';
import { Product } from 'entities/product';
import formatPrice from 'helpers/format-price';
import { FaCheck } from 'react-icons/fa';
import useFilterStore from 'store/useFilter';

import Wrapper from './wrapper';

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterStore();

  const getUniqueData = (data: Product[], attr: keyof Product) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === 'colors') {
      newVal = newVal.flat();
    }

    return (newVal = ['all', ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, 'category') as string[];
  const companyData = getUniqueData(all_products, 'company') as string[];
  const colorsData = getUniqueData(all_products, 'colors') as string[];

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem as string}
                className={curElem === category ? 'active' : ''}
                onClick={(e) =>
                  updateFilterValue(
                    e as unknown as React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement
                    >,
                  )
                }
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={(e) =>
              updateFilterValue(
                e as unknown as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
              )
            }
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem}>
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === 'all') {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={(e) =>
                    updateFilterValue(
                      e as unknown as React.ChangeEvent<
                        HTMLInputElement | HTMLSelectElement
                      >,
                    )
                  }
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor as string }}
                className={color === curColor ? 'btnStyle active' : 'btnStyle'}
                onClick={(e) =>
                  updateFilterValue(
                    e as unknown as React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement
                    >,
                  )
                }
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p> {formatPrice(price)} </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

export default FilterSection;
