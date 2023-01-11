import React, { useState } from 'react'
import { i18n } from './translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng'

const App = () => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
  const handleSelectChange = event => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value
    )
    window.location = window.location
  }
  return (
    <>
      <select onChange={handleSelectChange} value={language}>
        <option>Selecione um idioma</option>
        <option value="pt-BR">Português</option>
        <option value="en-US">English</option>
      </select>
    </>
  )
}

export default App
