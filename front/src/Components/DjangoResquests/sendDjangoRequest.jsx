async function sendRequestDjango(linkSendRequest, payload) {
    let TokenLogin;
    let corpoRequest;
    
    // Garante que os dados estejam no formato do json    
    const payloadString = JSON.stringify(payload.dadosProcesso);

    // Criar um headers para enviar os cookies 
    const headers = {
        'Content-Type': 'application/json',
    }

    // Verificar se o payload possui as autorizações necessárias para o processo. 
    if (payload.Authorization) {
        TokenLogin = payload.Authorization;
        headers['Authorization'] = `Bearer ${TokenLogin}`;
    }

    if (payload.methodProcesso === "POST" || payload.methodProcesso === 'PUT') {
        corpoRequest = {
            method: payload.methodProcesso,
            headers,
            body: payloadString,
        }
    } else if (payload.methodProcesso === "GET" || payload.methodProcesso === 'DELETE') {
        corpoRequest = {
            method: payload.methodProcesso,
            headers,
        }
    }
    
    // Realizar a conexão com o django
    try {
        const response = await fetch(linkSendRequest, corpoRequest);

        if (response.status === 204) {
            return {err_processo: 203, msg_processo: null}
        }

        // Retorna todos os dados do processo. 
        const responseDjango = await response.json();
        return responseDjango;
        
    } catch (error) {
        console.error("Erro ao enviar os dados para o Django.", error);
        return {msg_processo: error}
    }
}

export default sendRequestDjango;

/**
 * Fluxo REST no mesmo link
GET → lista todos os registros (/valores-servicos/) ou um específico (/valores-servicos/1/).

POST → cria um novo registro (/valores-servicos/).

PUT → atualiza um registro inteiro (/valores-servicos/1/).

PATCH → atualiza só alguns campos (/valores-servicos/1/).

DELETE → remove o registro (/valores-servicos/1/).
 */