const EventConfigReducer = (state = {}, action) => {
  switch(action.type) {

    case "UPDATE EVENT ID":
    return Object.assign({}, state, {
        eventId: action.id
      });

    // case "UPDATE PACKER":
    // return {
      
    // }
    default:
      return state;
  }
}

export default EventConfigReducer;