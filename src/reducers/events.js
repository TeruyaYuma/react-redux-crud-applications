import _ from 'lodash'
import {READ_EVENTS} from '../actions'
console.log('event');
export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            console.log(action.response.data);
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        default:
            console.log('ev')
            return events
    }
}