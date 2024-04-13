/// <reference types="cypress" />

const { expect } = require("chai");

describe('Testando funcionalidade do modulo de serviços', () => {
   it('Deve listar todos os seviços', () => {
      cy.request({
        method: 'GET',
        url: '/api/services',
      }).then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
      })
   });

   it('Deve listar um unico serviço', () => {
    cy.request({
      method: 'GET',
      url: '/api/services/6614732e7f57ea7562d4cd67',
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
    });
   });

   it('Deve apresentar mensagem de erro ao tentar listar serviço inexistente', () => {
    cy.request({
      method: 'GET',
      url: '/api/services/1614732e7f57ea7562d4cd67',
      "failOnStatusCode": false
    }).then((res) => {
      expect(res.status).to.equal(404);
      expect(res.body.msg).to.equal('Service not found');
    });
   });

   it('Deve criar um novo serviço', () => {
    cy.request({
      method: 'POST',
      url: '/api/services',
      body:{
          "name": "Evento de teste de cadastro",
          "describe": "teste",
          "price": 0,
          "image": "https://images.unsplash.com/photo-1711972495282-5e6d32c97ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body.msg).to.equal('Service created successfully');
    });
   });

   it('Deve atualizar os dados de um serviço existente', () =>{
      cy.request({
        method: 'PUT',
        url: '/api/services/6614732e7f57ea7562d4cd67',
        body:{
          "name": "Testando atualizar",
          "describe": "teste",
          "price": 0,
          "image": "https://images.unsplash.com/photo-1711972495282-5e6d32c97ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      }).then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Service updated successfully');
      })
   });

   it('Deve apresentar mensagem de erro ao tentar atualizar dados de um serviço inexistente', () =>{
      cy.request({
        method: 'PUT',
        url: '/api/services/1614732e7f57ea7562d4cd67',
        body:{
          "name": "Testando atualizar",
          "describe": "teste",
          "price": 0,
          "image": "https://images.unsplash.com/photo-1711972495282-5e6d32c97ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "failOnStatusCode": false
      }).then((res) => {
        expect(res.status).to.equal(404);
        expect(res.body.msg).to.equal('Service not found');
      })
    });

    it('Deve deletar um serviço existente', () =>{
      cy.request({
        method: 'DELETE',
        url: '/api/services/66182451241d092737c9dd18',
      }).then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Service deleted successfully');
      })
    });

    it.only('Deve apresentar mensagem de erro ao tentar deletar um serviço inexistente', () =>{
      cy.request({
        method: 'DELETE',
        url: '/api/services/66182451241d092737c9dd18',
        "failOnStatusCode": false
      }).then((res) => {
        expect(res.status).to.equal(404);
        expect(res.body.msg).to.equal('Service not found');
      })
    });
});