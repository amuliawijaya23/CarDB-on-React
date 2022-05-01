import { useEffect, useReducer, useRef} from 'react';

import axios from 'axios';

import reducer, {
  SET_USER,
  SET_APPLICATION_DATA
} from '../reducers/application';

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    user: {},
    listings: {},
    messages: {},
  });

  const ws = useRef(null);

  const login = (user) => {

  }

  return {state};
}
