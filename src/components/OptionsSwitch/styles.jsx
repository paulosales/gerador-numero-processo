import styled from 'styled-components'

export const OptionsSwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SwitchButton = styled.button`
  padding: 5px 20px;
  font-size: 1rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: solid 1px var(--primary-border);
  background-color: var(--button);
`

export const OptionsForm = styled.form`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  background: var(--background);
  border-radius: 5px;
  border: 1px solid var(--primary-border);
  padding: 5px;
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--display-bar-shadow);
`

export const OptionsField = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 10px 10px;
`

export const OptionsLabel = styled.label``

export const OptionsInput = styled.input`
  padding: 5px;
  font-size: 1rem;
`

export const OptionsSelect = styled.select`
  padding: 5px;
  font-size: 1rem;
`
