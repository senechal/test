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
  Friend.create(data, (err, ...args) => {
    if (err) res.status(500).send(err);
    listFriends(req, res);
  })

}

export const getFriend = (req, res) => {
  const { id } = req.params;
  Friend.findById(id, (err, friend) => {
    if (err)
      res.status(404).send(err);
    res.json(friend);
  });
}

export const updateFriend = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Friend.update({_id: id}, {$set: data}, err => {
    if (err) res.status(500).send(err);
    listFriends(req, res);
  })

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