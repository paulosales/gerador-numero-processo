import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import {
  DisplayContainer,
  DisplayLabel,
  DisplayContent,
  DisplayHint,
} from './styles'
import useHotkey, { formatShortcut } from '../../hooks/useHotkey'
import { useToast } from '../Toast'

const Display = ({ numeroProcesso, label, shortCut }) => {
  const showToast = useToast()

  const doCopy = useCallback(() => {
    copy(numeroProcesso)
    showToast(`Número do processo ${numeroProcesso} copiado.`)
  }, [numeroProcesso, showToast])

  useHotkey(shortCut, doCopy)

  return (
    <DisplayContainer
      title={shortCut ? `Copie com ${formatShortcut(shortCut)}` : undefined}
      onClick={doCopy}
    >
      <DisplayLabel>{label}</DisplayLabel>
      <DisplayContent>
        <span>{numeroProcesso}</span>
        <FontAwesomeIcon icon={faCopy} />
      </DisplayContent>
      {shortCut && (
        <DisplayHint>Atalho: {formatShortcut(shortCut)}</DisplayHint>
      )}
    </DisplayContainer>
  )
}

Display.propTypes = {
  numeroProcesso: PropTypes.string.isRequired,
  shortCut: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default Display
