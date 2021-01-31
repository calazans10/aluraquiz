import styled from 'styled-components';

const QuizBackground = styled.div`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainBg};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 500px) {
    background-image: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 210px;
      background-image: linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      background-position: center;
      background-size: cover;
    }

    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
