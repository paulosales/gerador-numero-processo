import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

import {
  OptionsSwitchContainer,
  SwitchButton,
  OptionsForm,
  OptionsField,
  OptionsInput,
  OptionsSelect,
  OptionsLabel,
} from './styles'

import actions from '../../redux/actions/options'

export default function OptionsSwitch(props) {
  const { label } = props

  const options = useSelector((state) => state.options)
  const dispatch = useDispatch()

  return (
    <OptionsSwitchContainer>
      <SwitchButton
        onClick={() => dispatch({ type: actions.TOGGLE_OPTIONS_FORM })}
      >
        {label}{' '}
        <FontAwesomeIcon icon={options.formVisible ? faCaretUp : faCaretDown} />
      </SwitchButton>
      <OptionsForm visible={options.formVisible}>
        <OptionsField>
          <OptionsLabel htmlFor="anoAjuizamento">
            Ano do ajuizamento do processo
          </OptionsLabel>
          <OptionsInput
            id="anoAjuizamento"
            type="number"
            onChange={(e) =>
              dispatch({
                type: actions.CHANGE_OPTIONS_ANO,
                ano: e.target.value,
              })
            }
            value={options.ano}
          />
        </OptionsField>
        <OptionsField>
          <OptionsLabel htmlFor="orgaoOuSegmentoJustica">
            Órgão ou segmento da justiça
          </OptionsLabel>
          <OptionsSelect
            id="orgaoOuSegmentoJustica"
            value={options.orgao}
            onChange={(e) =>
              dispatch({
                type: actions.CHANGE_OPTIONS_ORGAO,
                orgao: e.target.value,
              })
            }
          >
            <option value="0">Qualquer</option>
            <option value="1">STF</option>
            <option value="2">CNJ</option>
            <option value="3">STJ</option>
            <option value="4">Justiça Federal</option>
            <option value="5">Justiça do Trabalho</option>
            <option value="6">Justiça Eleitoral</option>
            <option value="7">Justiça Militar da União</option>
            <option value="8">Justiça dos Estados e do DF e Territórios</option>
            <option value="9">Justiça Militar Estadual</option>
          </OptionsSelect>
        </OptionsField>
      </OptionsForm>
    </OptionsSwitchContainer>
  )
}

OptionsSwitch.propTypes = {
  label: PropTypes.string,
}
