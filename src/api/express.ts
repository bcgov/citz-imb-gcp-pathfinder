import express, {Application} from 'express';
const cors = require('cors');

const app: Application = express();

const healthCheck = require('./routes/healthCheck')
const gcpRunGet = require('./routes/gcp-run-get')

app.use(express.json());
app.use(cors());

app.use("/api/healthcheck", healthCheck);
app.use("/api/gcp", gcpRunGet);

export default app;
