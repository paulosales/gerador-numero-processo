import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { MainBar, GeneratorBarContainer } from './styles'
import Display from '../Display'
import Button from '../Button'
import OptionsSwitch from '../OptionsSwitch'
import { generateNumeroProcesso } from '../../service/numero-processo-service'

const GeneratorBar = () => {
  const [numeroProcesso, setNumeroProcesso] = useState(generateNumeroProcesso())

  const { orgao, ano } = useSelector((state) => state.options)

  return (
    <GeneratorBarContainer>
      <MainBar>
        <Display
          numeroProcesso={numeroProcesso}
          label="Número do processo"
          shortCut="ctrl+c"
        />
        <Button
          shortCut="g"
          onClick={() => {
            setNumeroProcesso(generateNumeroProcesso(orgao, ano))
          }}
        >
          <FontAwesomeIcon icon={faArrowsRotate} /> Gerar
        </Button>
      </MainBar>
      <OptionsSwitch label="Opções" />
    </GeneratorBarContainer>
  )
}

export default GeneratorBar
