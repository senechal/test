import {
  listFriends,
  addFriend,
  getFriend,
  updateFriend,
  deleteFriend,
} from './views';


export default function server(router) {
  router.route('/friends')
    .get(listFriends)
    .post(addFriend)

  router.route('/friends/:id')
    .get(getFriend)
    .put(updateFriend)
    .delete(deleteFriend)

    router.get('/', (req, res) => {
      res.json({ message: 'It\'s alive!' });
    });
}
