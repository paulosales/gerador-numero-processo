import React from 'react'
import GeratorBar from './GeratorBar'
import { AppContainer, AppTitle, AppSubtitle, AppFooter } from './styles'

function App() {
  return (
    <AppContainer>
      <AppTitle>Gerador de Número de Processo Judicial</AppTitle>
      <AppSubtitle>
        Gere números de processo no formato unificado do CNJ para testes e
        homologação.
      </AppSubtitle>
      <GeratorBar />
      <AppFooter>
        Uso exclusivo para testes. Não representa um processo real.
      </AppFooter>
    </AppContainer>
  )
}

export default App
