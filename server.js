const express = require("express");
const app = express();
const port = 3000;

// routes
const PostRouter = require("./routes/post");

app.use("/posts", PostRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
