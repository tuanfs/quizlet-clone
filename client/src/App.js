import './App.css'
import Header from '../src/components/layout/header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './page/HomePage'
import HomePageNonLogin from './page/HomePageNonLogin'
import TopicPage from './page/TopicPage'
import ExplainPage from './page/ExplainPage'
import AuthModal from '../src/components/AuthModal'
import LoadUser from '../src/components/LoadUser'
import CourseCardDetailPage from './page/CourseCardDetailPage'
import LearnPage from './page/LearnPage'
import FlashPage from './page/FlashPage'
import WritePage from './page/WritePage'
import FolderPage from './page/FolderPage'
import AddTermPage from './page/AddTermPage'
import ModalCreate from './components/folder/ModalCreate'
import EditTermPage from './page/EditTermPage'
import ClassPage from './page/ClassPage'
import TestLoginGoogle from './page/TestLoginGoogle'

function App() {
  return (
    <div className='App bg-bgColor'>
      <Router>
        <LoadUser />
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/guest' element={<HomePageNonLogin />} />
          <Route path='/topic/:sub/:subt' element={<TopicPage />} />
          <Route path='/topic/:sub' element={<TopicPage />} />
          <Route path='/explain' element={<ExplainPage />} />
          <Route path='/course-detail/:id' element={<CourseCardDetailPage />} />
          <Route path='/learn/:id' element={<LearnPage />} />
          <Route path='/flash-card/:id' element={<FlashPage />} />
          <Route path='/write/:id' element={<WritePage />} />
          <Route path='/folder/:id' element={<FolderPage />} />
          <Route path='/folder/:id/flash' element={<FlashPage />} />
          <Route path='/folder/:id/write' element={<WritePage />} />
          <Route path='/folder/:id/learn' element={<LearnPage />} />
          <Route path='/add-term' element={<AddTermPage />} />
          <Route path='/edit-term/:id' element={<EditTermPage />} />
          <Route path='/class/:id' element={<ClassPage />} />
          <Route path='/test' element={<TestLoginGoogle />} />
        </Routes>
        <AuthModal />
        <ModalCreate />
      </Router>
    </div>
  )
}

export default App
