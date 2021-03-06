const API_BASE =
  "https://sheet.best/api/sheets/ac6e80c7-3b3d-4349-92aa-ff5ebf796902";

// pega o endpoint e coloca num json
const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getProducts: async () => {
    return [
      {
        slug: "todos-os-produtos",
        title: "Todos os Produtos",
        items: await basicFetch(`/tabs/produtos`), // concatena com APIKEY se tiver na API
      },
    ];
  },
  getCategories: async () => {
    return [
      {
        slug: "categorias",
        title: "Categorias",
        items: await basicFetch(`/tabs/categorias`),
      },
    ];
  },
};
