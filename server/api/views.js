import Friend from './models';

export const listFriends = (req, res) => {
  Friend.find((err, friends) => {
    if (err)
      res.status(500).send(err);
    res.json(friends);
  });
}


export const addFriend = (req, res) => {
  const data = req.body;
  const friend = new Friend(data);
  friend.save(err => {
    if (err) res.status(500).send(err);
    listFriends(req, res);
  });

}

export const getFriend = (req, res) => {
  const { id } = req.params;
  Bear.findById(id, (err, friend) => {
    if (err)
      res.status(404).send(err);
    res.json(friend);
  });
}

export const updateFriend = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(data);
  Friend.findById(id, (err, friend) => {
    if (err)
      res.status(404).send(err);
    friend = Object.assign(friend, data);
    friend.save(err => {
      if (err) res.status(500).send(err);
      listFriends(req, res);
    });
  });
}

export const deleteFriend = (req, res) => {
  const { id } = req.params;
  Friend.remove({
    _id: id,
  }, (err) => {
    if (err) res.status(500).send(err);
    listFriends(req, res);
  })
}