import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static.module'
import leaderBoard from '../db/leaderboard.json'
import presidents from '../db/presidents.json'
import teams from '../db/teams.json'

const app = new Hono();

app.get('/', (c) => c.json([
	{
		endpoint: '/leaderboard',
		description: 'Returns the leaderboard'
	},
	{
		endpoint: '/teams',
		description: 'Returns Kings League teams'
	},
	{
		endpoint: '/presidents',
		description: 'Returns Kings League presidents'
	}
]))

app.get('/leaderboard', (c) => {
	return c.json(leaderBoard)
})

app.get('/presidents', (c) => {
	return c.json(presidents)
})

app.get('/presidents/:id', (c) => {
	const id = c.req.param('id')
	const foundPresident = presidents.find(president => president.id === id)
	return foundPresident ? c.json(foundPresident) : c.json({message: 'President not found'}, 404)
})

app.get('/teams', (c) => {
	return c.json(teams)
})

app.get('/teams/:id', (c) => {
	const id = c.req.param('id')
	const foundTeam = teams.find(team => team.id === id)
	return foundTeam ? c.json(foundTeam) : c.json({message: 'Team not found'}, 404)
})

app.get('/static/*', serveStatic({root: './'}))

export default app

