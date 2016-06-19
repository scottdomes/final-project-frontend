import store from '../store/store';
import actions from '../actions/EventConfigActions'

const EventConfigHelpers = {
  //do axios call here
  getPackingList: function(eventId) {
    store.dispatch(actions.getPackingList(eventId));
  }
}

export default EventConfigHelpers;