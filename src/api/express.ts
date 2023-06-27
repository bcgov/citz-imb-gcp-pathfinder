import express, {Application} from 'express';
const cors = require('cors');

const app: Application = express();

const healthCheck = require('./routes/healthCheck')

app.use(express.json());
app.use(cors());

app.use("/api/healthcheck", healthCheck);

export default app;
