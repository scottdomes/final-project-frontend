const PackingListActions = {
  getPackingList: function(eventId) {
    return {
      type: 'GET PACKING LIST',
      eventId: eventId
    }
  }
}

export default PackingListActions;