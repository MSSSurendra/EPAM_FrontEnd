import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import First from './components/First.jsx'
import Second from './components/Second.jsx'
import Comp2 from './components/Comp2.jsx'
import Comp3 from './components/Comp3.jsx'
import Comp5 from './components/Comp5.jsx'
import Comp7 from './components/Comp7.jsx'


createRoot(document.getElementById('root')).render(
  <Comp1 />
)

createRoot(document.getElementById('root')).render(
  <Comp2 />
)

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State/>
  </StrictMode>,

  <First />
)*/
