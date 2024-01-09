function index(req, res) {
  const post = "Post List";
  res.send(post);
}

module.exports = {
  index: index,
};
