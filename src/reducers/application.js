const SET_USER = 'SET_USER';
const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';
const CREATE_LISTING = 'CREATE_LISTING';

export default function reducer(state, action) {
  switch(action.type) {

    case SET_USER:
      return {...state, user: action.user}

    case SET_APPLICATION_DATA:
      return {...state, listings: action.listings}
    
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  };
};