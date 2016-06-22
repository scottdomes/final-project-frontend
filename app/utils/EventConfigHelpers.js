// var axios = require('axios');
// var store = require('../store/store');
// var actions = require('../actions/git-info-actions');

// import { axios } from 'axios';
import store from '../store/store';
import actions from '../actions/EventConfigActions'

const EventConfigHelpers = {
  storeEventId: function(eventId) {
    return store.dispatch(actions.updateEventId(eventId));
  }
}

export default EventConfigHelpers;

// var helpers = {
//   getFiles: function (owner, repo, sha){
//     //repos/:owner/:repo/git/trees/:sha?recursive=1
//     //repos/:owner/:repo/git/trees/:branchname?recursive=1
//     return axios.get("https://api.github.com/repos/" + owner + "/" + repo + "/git/trees/" + sha + "?recursive=1")
//     .then(function(info){
//       store.dispatch(actions.updateTree(info));
//       return info;
//     })
//     .catch(function(error){
//       // console.log(error);
//       store.dispatch(actions.error(error));
//       return null;
//     });
//   }
// };

// module.exports = helpers;