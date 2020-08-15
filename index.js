import express from 'express';

import config from './config.js';
import { getInitialMarkup } from './shared/serverRender';

const server = express();

server.set('views', './public');
server.set('view engine', 'ejs');

server.use(express.static('public'));

server.get('*', (req, res) => {
	res.render('index', {
		initialData: { heading: 'hello', para: 'world' },
		initialMarkup: getInitialMarkup(req.url),
	});
});

server.listen(config.PORT, () => console.info(`Server started at config port: ${config.PORT}`));
