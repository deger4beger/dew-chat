import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { initializeUser } from './redux/slices/userSlice';
import Header from './components/single/Header/Header';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initializeUser())
	}, [])

    return (
        <>
            <Header />
            <div className="mainBlock" data-testid="main">
            	<AppRouter />
            </div>
        </>
    )
}

export default App;
