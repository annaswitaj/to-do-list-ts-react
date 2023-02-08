import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Context from './context/context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
)


// TO FIX: If item is done then dont display the edit button
// TO FIX: Change span to buttons
// TO FIX: Change title of page
// handleEdit => handleEditClick etc. 
// const [edit, setEdit] = useState<boolean>(false) => isEditing/isBeingEdited