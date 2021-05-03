import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de UX",
          type: 'deposit',
          category: "Design",
          amount: 6000,
          createdAt: new Date("2021-05-03 10:00:00")
        },
        {
          id: 2,
          title: "Internet",
          type: 'withdraw',
          category: "Casa",
          amount: 18.25,
          createdAt: new Date("2021-05-03 12:30:00")
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
