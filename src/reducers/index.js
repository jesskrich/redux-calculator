import {combineReducers} from 'redux';
import ButtonsReducer from './buttons-reducer';
import ActiveButtonReducer from './active-button-reducer';

const allReducers = combineReducers({
    buttons: ButtonsReducer,
    activeButton: ActiveButtonReducer
});

export default allReducers;
