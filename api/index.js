import {Hono} from 'hono'
import leaderBoard from '../db/leaderboard.json';


const app = new Hono();

app.get('/', (c) => {
	return c.json([
		{
			endpoint: '/leaderboard',
			description : 'Returns the leaderboard'
		}
	]);	
});

app.get('/leaderboard', (c) => {
	return c.json(leaderBoard);
});

export default app;

