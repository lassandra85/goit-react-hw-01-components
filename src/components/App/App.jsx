import {Profile} from '../User/User';
import user from 'data/user';

import {Statistics} from '../Statistics/Stats/Statistics';
import statistics from 'data/statistics';

import {FriendList} from '../FriendList/FriendList/FriendList';
import friends from 'data/friends';

import { Transations } from '../TransationsHistory/TransationsHistory';
import transations from 'data/transations';

export const App = () => {
  return (
    <div>
      
      <Profile
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar={user.avatar}
        stats = {user.stats}
      />

      <Statistics
        title = {statistics.title}
        statistics = {statistics} 
      />

      <FriendList
        friendList = {friends}
      />

      <Transations
        items={transations}
      />


    </div>
  );
};
