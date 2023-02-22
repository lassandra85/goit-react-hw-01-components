import PropTypes from "prop-types";
import css from '../FriendList/FriendList.module.css'; 

import FriendListItem from "../FriendListItem/FriendListItem";

export const FriendList = ({friendList}) => {
    return (<ul className={css.friendList}>
        {friendList.map(friend => (
            <FriendListItem id = {friend.id} avatarFriend = {friend.avatarFriend} nameFriend = {friend.nameFriend} isOnline = {friend.isOnline} />
        ),)}
            </ul>);
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatarFriend: PropTypes.string.isRequired,
      nameFriend: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}; 



 
