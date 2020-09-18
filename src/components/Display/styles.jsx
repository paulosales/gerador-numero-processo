import styled from 'styled-components'

export const DisplayContainer = styled.div`
  margin: 5px;
  border-radius: 5px;
  font-size: 2.5rem;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`

export const DisplayLabel = styled.div`
  font-size: 1rem;
`

export const DisplayContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid var(--primary-border);
  background-color: var(--cpf-display);

  &:hover {
    border-color: var(--secondary-border);
    background-color: var(--cpf-display-hover);
  }
`
