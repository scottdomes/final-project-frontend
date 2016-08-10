const GET_PACKING_LIST = 'GET PACKING LIST';
const ADD_ITEM = 'ADD ITEM';

const PackingListActions = {
  getPackingList: function(packingList) {
    return {
      type: GET_PACKING_LIST,
      publicPackingList: packingList.publicPackingList,
      privatePackingList: packingList.privatePackingList
    }
  },
  packItem: function (packingItem) {
    return {
      type: ADD_ITEM,
      item: packingItem,
    }
  }
}

export default PackingListActions;