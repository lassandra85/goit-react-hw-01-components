import PropTypes from "prop-types";
import css from '../FriendListItem/FriendListItem.module.css';


const FriendListItem = ({id, avatarFriend, nameFriend, isOnline}) => {
    return (
        <li className={css.itemFriend} key = {id}>
            <span className = {css.statusFriend} variant={isOnline}/>
            <img src={avatarFriend} alt={nameFriend} width="48" />
            <p className = {css.nameFriend}>{nameFriend}</p>
        </li >
    )
        
};


FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatarFriend: PropTypes.string.isRequired,
    nameFriend: PropTypes.string.isRequired,
};



export default FriendListItem;