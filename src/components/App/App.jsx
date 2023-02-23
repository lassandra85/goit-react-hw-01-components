import {Profile} from '../User/User';
import user from 'data/user';

import {Statistics} from '../Statistics/Stats/Statistics';
import statistics from 'data/statistics';

import {FriendList} from '../FriendList/FriendList/FriendList.jsx';
import friends from 'data/friends';

import {TransationsHistory} from '../TransationsHistory/TransationsHistory.jsx';
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
        friends = {friends}
      />
        
      <TransationsHistory
        items={transations}
      />


    </div>
  );
};
