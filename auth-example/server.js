import app from './app.js';

//start the server
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});