import React from 'react'
import Task from './components/tasks/task'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


export default function App() {
  return (
    <>
    <Header/>
    <main className='main'>
    <Task />
    </main>
    <Footer />
    </>
  )
}

