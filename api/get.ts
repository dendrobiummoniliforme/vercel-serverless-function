import { VercelRequest, VercelResponse } from '@vercel/node'
import * as model from '../models/Model';

/**
 * Sends a Success Response containing the word "TEST".
 * @exports A single function.
 */
export default (request: VercelRequest, response: VercelResponse): void => {
    response.status(200).send(model.get());
}
