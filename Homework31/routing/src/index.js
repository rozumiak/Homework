//Core
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Style
import './index.css';
//UI Component
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";
import Wrapper from "./ui/container/Wrapper";
//Pages
import Main from "./ui/pages/Main";
import Contact from "./ui/pages/Contact";
import About from "./ui/pages/About";
import ErrorBoundary from "./ui/container/ErrorBoundary";


function App() {
    const [error, setError] = useState(false);
    const handlerError = () => {
        setError(true);
    }
    return (
        <ErrorBoundary>
        <Wrapper>
            <Header/>
            {error && {user:1}}
            <button onClick={handlerError} style={{margin:"0 10%"}}>Check Error</button>
            <main>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </main>
            <Footer/>
        </Wrapper>
        </ErrorBoundary>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);


