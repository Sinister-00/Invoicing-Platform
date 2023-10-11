import React, { useState } from 'react';

import Wrapper from './wrapper';

// TODO: TYPE this
const ProductImage = ({ imgs = [{ url: '' }] }) => {
  const [image, setImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs?.map((curElm, index) => {
          return (
            <figure key={index}>
              <button onKeyDown={() => setImage(curElm)} onClick={() => setImage(curElm)}>
                <img src={curElm.url} alt={'product'} className="box-image--style" />
              </button>
            </figure>
          );
        })}
      </div>

      <div className="main-screen">
        <img src={image.url} alt={'product'} />
      </div>
    </Wrapper>
  );
};

export default ProductImage;
