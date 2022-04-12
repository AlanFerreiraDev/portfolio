import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;

  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
  color: ${({ theme }) => theme.primary};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const List = styled.ul``;
