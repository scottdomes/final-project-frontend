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
  },
  packItem: function (item, packingListType, eventId){

    // $.ajax({
    //   url: 'http://localhost:3000/api/items',
    //   method: 'POST',
    //   data: {
    //     label: value,
    //     event_id: this.state.event_id,
    //     list_type: listType
    //   }

    return axios.post('http://localhost:3000/api/items', 
      {
          label: item,
          event_id: eventId,
          list_type: packingListType
        })
      .then(function (item) {
        console.log("YAHOOO");
        console.log(item);
        store.dispatch(actions.packItem(item.data))
        //update the state here
      })
      .catch(function (error) {
        console.log("Error, item was not successfully added")
        //error here
      })
      //Make an axios call to the end point
      // store.dispatch(actions.packItem(item));
  }


}

export default PackingListHelpers;