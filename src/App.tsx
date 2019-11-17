import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from './logo.svg'

type AppContainerProps = {
  className: string
  children: ReactNode
}

const AppContainer = styled.div<AppContainerProps>`
  .App {
    text-align: center;
  }
  .App-logo {
    height: 40vmin;
  }
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .App-link {
    color: #09d3ac;
  }
`

function App(): ReactElement {
  return (
    <AppContainer className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppContainer>
  )
}

export default App
