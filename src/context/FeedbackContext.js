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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{feedback, feedbackEdit, addFeedback, deleteFeedback, updateFeedback, editFeedback}}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
