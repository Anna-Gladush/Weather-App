/* eslint-disable no-undef */
const express = require('express');
// const path = require('path');

const app = express();

// Views setup
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, 'public')));

// ROUTES
// const indexRouter = require("./routes/indexRouter");
// app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});