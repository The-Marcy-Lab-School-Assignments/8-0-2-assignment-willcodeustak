const dotenv = require('dotenv'); //control C escape terminal comment
dotenv.config();
const express = require('express');
const app = express();
const fetchData = require('./utils/fetchData');

const serveGifs = async (req, res, next) => {
	const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=20&rating=g`;
	//you can edit the amount of gifs through "limit= "
	const [data, error] = await fetchData(API_URL);
	//the fetchData is like an internalized try-catch block that is used on our api_url
	if (error) {
		console.log(error.message);
		return res.status(404).send(error);
	}
	res.send(data);
};

const path = require('path');

const pathToDistFolder = path.join(__dirname, '../giphy-search/dist');
console.log(pathToDistFolder);
const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

app.get('/api/gifs', serveGifs);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
