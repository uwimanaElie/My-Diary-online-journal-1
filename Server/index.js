import express from 'express';
import bodyParse from 'body-parser'
import mainRoute from '../server/routes/mainRoute';
const app = express()
app.use(bodyParse.json());


app.use('/api/v1/', mainRoute);
app.listen(4000, () => console.log(`listening on port {4000}`))

export default app;