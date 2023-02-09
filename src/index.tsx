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

// DONE: If item is done then dont display the edit button
// DONE: Change span to buttons
// DONE: Change title of page
// DONE handleEdit => handleEditClick etc.
// DONE const [edit, setEdit] = useState<boolean>(false) => isEditing/isBeingEdited
