import React, { useState } from 'react'
import { MainBar, GeneratorBarContainer } from './styles'
import Display from '../Display'
import Button from '../Button'
import { generateNumeroProcesso } from '../../service/numero-processo-service'

const GeneratorBar = () => {
  const [numeroProcesso, setNumeroProcesso] = useState(generateNumeroProcesso())

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
            setNumeroProcesso(generateNumeroProcesso())
          }}
        >
          Gerar
        </Button>
      </MainBar>
    </GeneratorBarContainer>
  )
}

export default GeneratorBar
