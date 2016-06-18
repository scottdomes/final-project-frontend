const EventConfigActions = {
  updateEventId: function(eventId) {
    return {
      type: 'UPDATE EVENT ID',
      eventId: eventId
    }
  }
}

export default EventConfigActions;

// var actions = {
//   updateOwner: function (owner){
//     return {
//       type: 'UPDATE OWNER',
//       value: owner
//     };
//   },
//   updateRepo: function updateRepo(repo){
//     return {
//       type: 'UPDATE REPO',
//       value: repo
//     };
//   },
//   updateSha: function (sha){
//     return {
//       type: 'UPDATE SHA',
//       value: sha
//     }
//   },
//   updateTree: function (info){
//     return {
//       type: 'UPDATE TREE',
//       value: info.data.tree,
//       status: info.status,
//       statusText: info.statusText
//     }
//   },
//   error: function (error){
//     return {
//       type: 'ERROR',
//       status: error.status,
//       statusText: error.statusText
//     }
//   },
//   resetStatus: function (){
//     return {
//       type: 'RESET',
//       status: '',
//       statusText: ''
//     }
//   }
// }

// module.exports = actions;