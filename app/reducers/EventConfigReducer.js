const EventConfigReducer = (state = {}, action) => {
  switch(action.type) {
    case "UPDATE EVENT ID":
    return Object.assign({}, state, {
        eventId: action.eventId
      });

    // case "UPDATE PACKER":
    // return {
      
    // }
    default:
      return state;
  }
}

export default EventConfigReducer;