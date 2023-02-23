import {Profile} from '../User/User';
import user from 'data/user';

import {Statistics} from '../Statistics/Stats/Statistics';
import statistics from 'data/statistics';

import {FriendList} from '../FriendList/FriendList/FriendList';
import friends from 'data/friends';

import { TransationsHistory } from '../TransationsHistory/TransationsHistory';
import transations from 'data/transations';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    > <Profile
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


      <TransationsHistory
        items={transations}
      />
    </div>
  );
};
