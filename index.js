import app from './app'

app.listen(app.get('port'), () => {
	console.log(`app is runing an port ${app.get('port')}`)
})