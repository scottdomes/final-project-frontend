const GET_PACKING_LIST = 'GET PACKING LIST';
const ADD_ITEM = 'ADD ITEM';

const PackingListReducer = (state = {}, action) => {
  switch(action.type) {

    case ADD_ITEM:
    var newPublicPackingList = state.publicPackingList.concat(action.item);
    return Object.assign({}, state, {
        publicPackingList: newPublicPackingList
      });

    case GET_PACKING_LIST:
    return Object.assign({}, state, {
      publicPackingList: action.publicPackingList,
      privatePackingList: action.privatePackingList
    });
    // case "UPDATE PACKER":
    // return {
      
    // }
    default:
      return state;
  }
}

export default PackingListReducer;

// var reducer = function(state = {}, action){
//   // console.log('reducer was called with state', state, 'and action', action)
//   switch(action.type){
//     case 'UPDATE OWNER':
//       return Object.assign({}, state, {
//         owner: action.value
//       });
//       // {
//       //   ...state,
//       //   owner: action.value
//       // }
//     case 'UPDATE REPO':
//       return Object.assign({}, state, {
//         repo: action.value
//       });
//     case 'UPDATE SHA':
//       return Object.assign({}, state, {
//         sha: action.value
//       });

//     case 'UPDATE TREE':
//       return Object.assign({}, state, {
//         tree: action.value,
//         status: action.status,
//         statusText: action.statusText
//       });
//     case 'ERROR':
//       return Object.assign({}, state, {
//         status: action.status,
//         statusText: action.statusText
//       });
//     case 'RESET':
//       return Object.assign({}, state, {
//         status: action.status,
//         statusText: action.statusText
//       });
//     default:
//       return state;
//   }

// };

// module.exports = reducer;