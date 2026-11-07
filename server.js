/*const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });*/

const express = require('express');
const path = require('path');
const appRoute = require('./routers/appRoute');
const loginRoute = require('./routers/loginroute');

const app = express();
const PORT = 3000;

// 1. Allow reading JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Serve your HTML/CSS files from main folder (not public)
app.use(express.static(__dirname));

// 3. Connect your API routes - THIS IS THE MISSING PART
app.use('/api', appRoute);
app.use('/api', loginRoute);

// 4. Test route
app.get('/', (req, res) => {
  res.send('MUST Online App Server is Running! Go to /signup.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

