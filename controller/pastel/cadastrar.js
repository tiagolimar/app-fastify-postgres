import { execute } from "../../service/pastel/index.js";

export default function cadastrarPastel(request, reply) {
    console.log(request.body);
    const { nome, valor, tamanho, viagem } = request.body;
    const query = `
        INSERT INTO pastel (nome, valor, tamanho, viagem)
        VALUES ('${nome}', ${valor}, '${tamanho}', ${viagem})
    `;
    execute(query);
    return { message: 'Pastel cadastrado com sucesso!' };
}