import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../client/App.js';

export const getInitialMarkup = url =>
	renderToString(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>,
	);
