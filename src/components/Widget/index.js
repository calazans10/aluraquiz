import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainBg};

  h1,
  h2,
  h3 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

Widget.Topic = styled.a`
  display: block;
  margin-bottom: 8px;
  padding: 10px 15px;
  transition: 0.3s;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  color: ${({ theme }) => theme.colors.contrastText};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Widget;
