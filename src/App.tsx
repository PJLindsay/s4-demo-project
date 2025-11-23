import Button from './components/Button.tsx'

function App() {
  return (
    <main>
      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://wikipedia.org">
          Link
        </Button>
      </p>
    </main>
  )
}

export default App
