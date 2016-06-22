const PackingListActions = {
  getPackingList: function(packingList) {
    return {
      type: 'GET PACKING LIST',
      publicPackingList: packingList.publicPackingList,
      privatePackingList: packingList.privatePackingList
    }
  }
}

export default PackingListActions;