var React = require('react');

var FriendList = React.createClass({

  render: function () {
    console.log(this.props.friends, "from component");
    var friendRows = this.props.friends.map(function(friend) {
      return  <tr key={friend.id}>
                <td><img src={friend.picture.data.url} />{friend.name}</td>
                <td></td>
              </tr>;
    });

    return (
      <div className="row">
        <div className="column large-8 large-centered"> 
          <h1 className="text-center">Invite your friends on facebook!</h1>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {friendRows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});

module.exports = FriendList;