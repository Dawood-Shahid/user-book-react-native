import {combineEpics} from 'redux-most';
import EpicAction from './EpicAction';

const rootEpic = combineEpics([EpicAction]);

export default rootEpic;
