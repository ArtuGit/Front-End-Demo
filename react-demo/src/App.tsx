import './App.css'
import  { Boxes } from './components/Boxes/Boxes'

function App() {
    return (
        <>
            <div className="bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end h-screen">
                <Boxes amount={15}/>
            </div>
        </>
    )
}

export default App
