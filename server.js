const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

// Set up express server
app.prepare()
  .then( () => {
    const server = express();

    // Handle the calls to /p/:id server side
    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'

      console.log('REQ PARAMS ID: ', req.params.id);
      
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
  
    // for now capture all urls
    server.get('*', (req, res) => {
      return handle(req,res)
    })
    
    //Start the server, catch any errors
    server.listen(3000, (err) => {
      if (err) throw err;
      console.error('>Ready on http://localhost:3000')
    })
  })

  // Catch any errors
  .catch((ex) => {
    console.log(ex.stack)
    process.exit(1)
  })