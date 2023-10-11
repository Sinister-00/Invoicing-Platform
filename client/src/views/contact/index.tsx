import Header from 'components/header';
import useUserStore from 'store/useUser';

import { useAuth } from '../../contexts/AuthContext';
import Wrapper from './wrapper';

const ContactPage = () => {
  const { userData } = useUserStore();
  const { token } = useAuth();
  const isAuthenticated = !!token;

  // handling form is left
  return (
    <>
      <Header />
      <Wrapper>
        <h2 className="common-heading">Contact page</h2>
        <div className="container">
          <div className="contact-form">
            <form method="POST" className="contact-inputs">
              <input
                type="text"
                placeholder="username"
                name="username"
                value={isAuthenticated ? userData.name : ''}
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                value={isAuthenticated ? userData.email : ''}
                required
              />

              <textarea
                name="Message"
                cols={30}
                rows={10}
                required
                autoComplete="off"
                placeholder="Enter you message"
              ></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ContactPage;
