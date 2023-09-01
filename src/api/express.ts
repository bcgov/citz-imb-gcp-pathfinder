import express, {Application} from 'express';
const cors = require('cors');

const app: Application = express();

const healthCheck = require('./routes/healthCheck')
const gcpRunGet = require('./routes/gcp-run-get')
const gcpRunCreate = require('./routes/gcp-run-create')

app.use(express.json());
app.use(cors());

app.use("/api/healthcheck", healthCheck);
app.use("/api/gcp/get", gcpRunGet);
app.use('/api/gcp/create',gcpRunCreate )

export default app;
