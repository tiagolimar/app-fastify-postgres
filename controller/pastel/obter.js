import { execute } from '../../service/pastel/index.js';

export default async function obter (request, reply) {
    const response = await execute('SELECT * FROM pastel');
    return { data: response.rows }
};