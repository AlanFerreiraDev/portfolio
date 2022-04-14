import styled from 'styled-components';
import medias from 'styles/medias';

export const Container = styled.section`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  margin: 20px 40px;

  img {
    max-width: 300px;
    min-width: 130px;
    width: 100%;
    border-radius: 50%;

    flex: 1;

    &:hover {
      will-change: translate;
      animation: go-back 1s;
      transition: 0.5s;
    }

    @keyframes go-back {
      0% {
        transform: translateX(0px);
      }

      50% {
        transform: translateX(10px);
      }

      75% {
        transform: translateX(-10px);
      }

      100% {
        transform: translateX(0px);
      }
    }
  }

  ${medias.greaterThan('huge')`
      div {
        flex: 1

        h1 {
          color: red;
        }
      }

  `}
`;

export const TextContainer = styled.section`
  margin-bottom: 32px;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${props => props.theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${props => props.theme.secondary};
  }
`;
