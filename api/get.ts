import { VercelRequest, VercelResponse } from '@vercel/node'
import * as serverlessFunction from '../models/get';

/**
 * Sends a Success Response containing the word "TEST".
 */
export default (request: VercelRequest, response: VercelResponse) => {
    response.status(200).send(serverlessFunction.get());
}
