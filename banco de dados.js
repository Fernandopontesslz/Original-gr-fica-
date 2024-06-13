// Banco de dados simples em JavaScript
let database = {
    users: [
        { id: 1, name: 'João', email: 'joao@example.com' },
        { id: 2, name: 'Maria', email: 'maria@example.com' },
        { id: 3, name: 'Pedro', email: 'pedro@example.com' }
    ],
    products: [
        { id: 1, name: 'Camisa', price: 20.00 },
        { id: 2, name: 'Calça', price: 30.00 },
        { id: 3, name: 'Sapato', price: 50.00 }
    ]
};

// Exemplo de como acessar os dados
console.log(database.users); // Exibe todos os usuários
console.log(database.users[0]); // Exibe o primeiro usuário
console.log(database.products); // Exibe todos os produtos