/// <reference types="cypress" />

describe('Testando funcionalidade do modulo de festas', () => {
    it('Deve listar todas as festar', () =>{
        cy.request({
            method: 'GET',
            url: '/api/parties',
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
        })
    });

    it('Deve listar uma unica festa', () =>{
        cy.request({
            method: 'GET',
            url: '/api/parties/6616aa37211a9f7585d86a6b',
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
        })
    });

    it('Deve apresentar mensagem de erro ao tentar listar festa inexistente', () =>{
        cy.request({
            method: 'GET',
            url: '/api/parties/1616aa37211a9f7585d86a6b',
            'failOnStatusCode': false,
        }).then((res) => {
            expect(res.status).to.equal(404);
            expect(res.body.msg).to.equal('Party not found');
        });
    });

    it('Deve criar uma nova festa', () => {
        cy.request({
            method: 'POST',
            url: '/api/parties',
            body: {
                "title": "FESTA DE TESTE",
                "author": "ANONIMO",
                "describe": "teste",
                "budget": 100000,
                "image": "TESTE" 
            
            }
        }).then((res) => {
            expect(res.status).to.equal(201);
            expect(res.body.msg).to.equal('Party created successfully');
        });
    });

    it('Deve atualizar os dados de uma festa existentes', () => {
        cy.request({
            method: 'PUT',
            url: '/api/parties/6616aa37211a9f7585d86a6b',
            body: {
                "title": "ATUALIZAR FESTA DE TESTE",
                "author": "ANONIMO",
                "describe": "teste",
                "budget": 100000,
                "image": "TESTE" 
            
            }
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body.msg).to.equal('Party updated successfully');
        })
    });

    it('Deve apresentar mensagem de erro ao tentar atualizar uma festa inexistente', () => {
        cy.request({
            method: 'PUT',
            url: '/api/parties/1616aa37211a9f7585d86a6b',
            body: {
                "title": "ATUALIZAR FESTA DE TESTE",
                "author": "ANONIMO",
                "describe": "teste",
                "budget": 100000,
                "image": "TESTE" 
            
            },
            'failOnStatusCode': false,
        }).then((res) => {
            expect(res.status).to.equal(404);
            expect(res.body.msg).to.equal('Party not found');
        })
    });
    it('Deve deletar uma festa existente', () => {
        cy.request({
            method: 'DELETE',
            url: '/api/parties/661d818fa8b896db177c7ca4',
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body.msg).to.equal('Party deleted successfully');
        })
    });

    it('Deve apresentar mensagem de erro ao tentar deletar uma festa inexistente', () => {
        cy.request({
            method: 'DELETE',
            url: '/api/parties/6616aeab4670ab33c69fa47a',
            'failOnStatusCode': false,
        }).then((res) => {
            expect(res.status).to.equal(404);
            expect(res.body.msg).to.equal('Party not found');
        });
    });

});