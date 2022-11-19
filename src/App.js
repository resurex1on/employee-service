import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LeftPanel from './components/LeftPanel/LeftPanel';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TestsPage from './pages/TestsPage/TestsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import Profile from './pages/Profile/Profile';
import ChatPage from './pages/ChatPage/ChatPage';
import EditProfile from './components/EditProfile/EditProfile';
import TasksPage from './pages/TasksPage/TasksPage';

const App = function () {
  return (
    <Router>
      <Header />
      <div className='app-container'>

        <div className='app-container-content'>

          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/tests' element={<TestsPage />} />
            <Route path='/login' element={<LoginPage type='login' />}/>
            <Route path='/register' element={<LoginPage type = 'register'/>}/>
            <Route path='/statistic' element={<StatisticPage />}/>
            <Route path='/profile' element={<Profile isCurrentUserOwner={true} />}/>
            <Route path='/profile/edit' element={<EditProfile />}/>
            <Route path='/1-on-1s' element={<ChatPage />}/>
            <Route path='/tasks' element={<TasksPage />}/>
          </Routes>
        </div> 
      </div>
    </Router>

  );
}

export default App;
