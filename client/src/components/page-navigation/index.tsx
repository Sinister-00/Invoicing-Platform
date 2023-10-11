import { NavLink } from 'react-router-dom';

import Wrapper from './wrapper';

const PageNavigation = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};

export default PageNavigation;
