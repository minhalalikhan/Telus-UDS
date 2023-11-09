import './init'
import { BaseProvider, } from '@telus-uds/components-web'
import AlliumTheme from '@telus-uds/theme-allium'
import './App.css'

import Header from './components/Header'

function App() {


  return (
    <BaseProvider defaultTheme={AlliumTheme}>

      {/* MENU  */}
      <Header />
      {/* BODY  */}

    </BaseProvider>

  )
}

export default App
