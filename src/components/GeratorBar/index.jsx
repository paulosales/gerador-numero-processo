import React, { useState } from 'react'
import { MainBar, GeneratorBarContainer } from './styles'
import Display from '../Display'
import Button from '../Button'
import { generateNumeroProcesso } from '../../service/numero-processo-service'
import OptionsSwitch from '../OptionsSwitch'
import { useSelector } from 'react-redux'

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
          Gerar
        </Button>
      </MainBar>
      <OptionsSwitch label="Opções"></OptionsSwitch>
    </GeneratorBarContainer>
  )
}

export default GeneratorBar
