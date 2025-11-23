import { useRef } from 'react'
import Input from './components/Input.tsx'
import Form from './components/Form.tsx'

function App() {
  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
      </Form>
    </main>
  )
}

export default App
