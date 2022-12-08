const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const coms = express();

coms.listen(port, () => console.log(`Server started on port ${port}`));
