import shortid from 'shortid';


// selectors
export const getSearchString = () => 'ter';

//destructure
// let searchString = getSearchString();

export const countVisibleCards = ({cards},searchString = getSearchString() ) => cards.filter((card) => new RegExp(searchString, 'i').test(card.title)).length;
//console.log(countVisibleCards());

export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload=> ({
  payload: {
    ...payload,
    id: shortid.generate(),
  },
  type: CHANGE,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE:
      console.log(statePart,'payload: ',action.payload);
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

