const express = require('express');

const morgan = require('morgan');

const app = express();

var mockData = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

app.get('/', (req,res) =>  {
    
    res.status(200).send({status:'ok'});

});

app.get('/api/TodoItems', (req,res) => {
    
    res.status(200).send(mockData);

});


app.post('/api/TodoItems', (req,res) => {    
    
    res.status(201).send(mockData[0])

});

app.delete('/api/TodoItems/:number', (req,res) => {
    res.status(200).send(mockData[0]);
});

app.get('/api/TodoItems/:number', (req,res) => {
    
    var Num = {

          todoItemId: 1,
          name: 'an item',
          priority: 3,
          completed: false
        
        }

        res.status(200).send(Num)
    
    });

module.exports = app;