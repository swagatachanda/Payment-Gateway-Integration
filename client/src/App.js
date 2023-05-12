import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import PaymentSuccess from "./components/PaymentSuccess"

function App() {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Home />}></Route>
                <Route path='/paymentsuccess' element={<PaymentSuccess />}></Route>
            </Routes>
        </Router>
    )
}

export default App
