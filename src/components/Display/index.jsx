import React from 'react'
import { DisplayContainer, DisplayLabel, DisplayContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import { NotificationManager } from 'react-notifications'
import { hotkey_display, hotkeys } from 'react-keyboard-shortcuts'

class Display extends React.PureComponent {
  constructor() {
    super()
    this.doCopy = this.doCopy.bind(this)
  }

  doCopy() {
    const { numeroProcesso } = this.props
    copy(numeroProcesso)
    NotificationManager.info(
      `Número do processo ${numeroProcesso} copiado.`,
      '',
      3000
    )
  }

  componentDidMount() {
    this.hot_keys = {}
    if (this.props.shortCut) {
      this.hot_keys[this.props.shortCut] = {
        priority: 1,
        handler: this.doCopy,
      }
    }
  }

  render() {
    const { numeroProcesso, label } = this.props

    return (
      <DisplayContainer
        title={`Copie com ${hotkey_display(this.props.shortCut)}`}
        onClick={this.doCopy}
      >
        <DisplayLabel>{label}</DisplayLabel>
        <DisplayContent>
          {numeroProcesso}
          <FontAwesomeIcon icon={faCopy} />
        </DisplayContent>
      </DisplayContainer>
    )
  }
}

Display.propTypes = {
  formated: PropTypes.bool,
  numeroProcesso: PropTypes.string.isRequired,
  shortCut: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default hotkeys(Display)
