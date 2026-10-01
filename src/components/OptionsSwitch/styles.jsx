import styled from 'styled-components'

export const OptionsSwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SwitchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    background-color: var(--primary-soft);
    color: var(--primary);
  }
`

export const OptionsForm = styled.form`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  width: 100%;

  background: var(--surface);
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 12px;
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.08);
`

export const OptionsField = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 6px;
  padding: 6px 10px;
  min-width: 180px;
`

export const OptionsLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
`

export const OptionsInput = styled.input`
  padding: 8px 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`

export const OptionsSelect = styled.select`
  padding: 8px 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`
