import './App.css'
import { TranslateFrom } from './components/TranslateFrom/TranslateFrom'
import { TranslateTo } from './components/TranslateTo/TranslateTo'
import TranslatetorProvider from './contexts/TranslatetorProvider'

function App() {
  return (
    <TranslatetorProvider>
      <main className='flex flex-col items-center h-screen p-10'>
        <h1 className='text-6xl font-bold'>LinguaFlow</h1>
        <section className='h-full flex justify-center items-center w-[80%]'>
          <article className='main-container'>
            <TranslateFrom />
            <TranslateTo />
          </article>
        </section>
      </main>
    </TranslatetorProvider>
  )
}

export default App
