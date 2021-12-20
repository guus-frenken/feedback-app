import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header title='Feedback App' />
      <div className='container'>
        <Router>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                  <AboutIconLink />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
