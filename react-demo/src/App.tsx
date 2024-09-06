import './App.css'
import  { Boxes } from './components/Boxes/Boxes'

function App() {
    return (
        <>
            <section className="bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end min-h-screen h-max">
                <Boxes amount={15}/>
            </section>
        </>
    )
}

export default App
