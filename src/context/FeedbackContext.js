import {v4 as uuidv4} from 'uuid';
import {createContext, useState} from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sint ad cumque perspiciatis! Maiores ipsum excepturi numquam minus quas. Nesciunt, tempora odio consequatur beatae tenetur quibusdam nisi ratione itaque veniam!',
      rating: 10,
    },
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sint ad cumque perspiciatis! Maiores ipsum excepturi numquam minus quas. Nesciunt, tempora odio consequatur beatae tenetur quibusdam nisi ratione itaque veniam!',
      rating: 7,
    },
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sint ad cumque perspiciatis! Maiores ipsum excepturi numquam minus quas. Nesciunt, tempora odio consequatur beatae tenetur quibusdam nisi ratione itaque veniam!',
      rating: 2,
    },
  ]);

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
    <FeedbackContext.Provider value={{feedback, addFeedback, deleteFeedback}}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
