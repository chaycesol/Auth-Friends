import React from 'react';
import axios from 'axios'

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios
        .get("/api/friends")
        .then((res) => {
            console.log(res.data)
            this.setState({
                friendsList: res.data
            })
        })
        .catch((err) => console.log(err));
    }

    render() {
        const friendListData = this.getData;
        console.log(friendListData);
        return(
            <div className="friends-container">
            
            </div>
        )
    }
};

export default FriendsList;