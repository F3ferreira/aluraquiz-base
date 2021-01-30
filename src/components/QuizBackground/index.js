import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  animation: fadein 1s;

  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }

  @keyframes fadein {
  from { opacity: 0.3; }
  to { opacity: 1; } /* Padrão */
  }
  @-moz-keyframes fadein {
  from { opacity: 0.3; }
  to { opacity: 1; } /* Firefox */
  }
  @-webkit-keyframes fadein {
  from { opacity: 0.3; }
  to { opacity: 1; } /* Webkit */
  }
  @-ms-keyframes fadein {
  from { opacity: 0.3; }
  to { opacity: 1; } /* IE */
  }​

  @keyframes fadeout {
  from { opacity: 1; }
  to { opacity: 0.3; } /* Padrão */
  }
  @-moz-keyframes fadeout {
  from { opacity: 1; }
  to { opacity: 0.3; } /* Firefox */
  }
  @-webkit-keyframes fadeout {
  from { opacity: 1; }
  to { opacity: 0.3; } /* Webkit */
  }
  @-ms-keyframes fadeout {
  from { opacity: 1; }
  to { opacity: 0.3; } /* IE */
  }​

`;

export default QuizBackground;