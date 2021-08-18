const API_BASE = 'https://fakestoreapi.com';
//  https://fakestoreapi.com/products


// pega o endpoint e coloca num json
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

export default {
    getProducts: async () => {
        return [
            {
                slug: 'todos-os-produtos',
                title: 'Todos os Produtos',
                items: await basicFetch(`/products`) // concatena com APIKEY se tiver na API
            }
        ];
    }
}