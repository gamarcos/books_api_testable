import express from 'express'

const app = express()
app.route('/books').get((req, res) => {
    res.json([{
        id: 1,
        name: 'Default books'
    }])
})

export default app
