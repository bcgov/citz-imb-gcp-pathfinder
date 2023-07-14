import express, {Request, Response} from 'express';

const router = express.Router();

/**
 * @description Used to check if API is healthy and running.
 * @param {Request}     req Incoming request
 * @param {Response}    res Outgoing response
 * @returns {Response}      A 200 status indicates the API is healthy and running
 */


router.get('/', async (req: Request, res: Response) => {
 
    const name = 'projects/bkzge7-dev/locations/us-central1/services/test-cloud-run-repository'
  
    // Imports the Run library
    const {ServicesClient} = require('@google-cloud/run').v2;
  
    // Instantiates a client
    const runClient = new ServicesClient();
  
    //async function callGetService() {
    try{
      // Construct request
      const request = {
        name,
      };
      console.log("hello")
      // Run request
      const response = await runClient.getService(request);
      console.log(response);
      return res.json({status: '200', response: "found service"})
    }catch(err){
        console.log(err)
            return res.json({status: '200', response: "no service"});
    }
    
    
//     if(callGetService() != undefined){
//         return res.json({status: '200', response: "found service"})
//     }else{  
//     return res.json({status: '200', response: "no service"})
//     }
// }catch{
//     return res.json({status: '200', response: "no service"})
// }
    

    //callGetService();
    //return res.status(200).send(callGetService())
})

module.exports = router;
