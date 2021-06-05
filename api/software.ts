import { VercelRequest, VercelResponse } from '@vercel/node'
import * as software from '../models/SoftwareModel';

/**
 * Sends a Success Response containing the word "software".
 */
export default (request: VercelRequest, response: VercelResponse) => {
    response.status(200).send(software.get());
}
