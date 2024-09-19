import express from 'express'
import path from 'node:path'
import router from '../layla-show-official-website/src/main.jsx'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'components'));
app.set('view engine');

app.use('/', router);

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
