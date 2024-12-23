import app    from './config/express.js';

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app;