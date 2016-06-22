import store from '../store/store';
import actions from '../actions/PackingListActions'
import axios from 'axios';


const PackingListHelpers = {
  //do axios call here
  getPackingList: function(eventId) {
    return axios.get(`http://localhost:3000/api/items/${eventId}`)
    .then(function (info) {
      console.log('Packing List Get Success');
      console.log(info);
      store.dispatch(actions.getPackingList(info.data));
      return info;
    })
    .catch(function(error) {
      console.log("Packing List Get Error");
      console.log(error);
      return null;
    })
    // store.dispatch(actions.getPackingList(eventId));
  }
}

export default PackingListHelpers;