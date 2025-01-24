import { pool } from "../../connector/connector.js";

export async function execute(query) {
    const client = await pool.connect();
    try {
        const res = await client.query(query);
        console.log('Executou SQL');
        return res;
    } catch (error) {
        console.error('Erro ao executar query:', error);
        throw error;
    } finally {
        client.release();
    }
}

async function criarTabelaPastel() {
    await execute(`
        DROP TABLE IF EXISTS pastel
    `);

    await execute(`
        CREATE TABLE IF NOT EXISTS pastel (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(50) NOT NULL,
            valor NUMERIC(5, 2) NOT NULL,
            tamanho VARCHAR(20) NOT NULL,
            viagem BOOLEAN NOT NULL
        )
    `);
}

criarTabelaPastel();