import './App.css'
import  { Boxes } from './components/Boxes/Boxes'

function App() {
    return (
        <>
            <div className="bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end min-h-screen h-max">
                <Boxes amount={15}/>
            </div>
        </>
    )
}

export default App
