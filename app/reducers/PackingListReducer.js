const PackingListReducer = (state = {}, action) => {
  switch(action.type) {

    case "ADD ITEM":
    return Object.assign({}, state, {
        item: action.value
      });

    case "GET PACKING LIST":
    return Object.assign({}, state, {
      
    });
    // case "UPDATE PACKER":
    // return {
      
    // }
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