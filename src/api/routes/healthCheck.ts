import express, {Request, Response} from 'express';

const router = express.Router();

/**
 * @description Used to check if API is healthy and running.
 * @param {Request}     req Incoming request
 * @param {Response}    res Outgoing response
 * @returns {Response}      A 200 status indicates the API is healthy and running
 */

router.get('/', (req: Request, res: Response) => {
    return res.status(200).send("gcp-pathfinder API is Healthy and Running")
})

module.exports = router;
