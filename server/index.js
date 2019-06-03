import express from 'express';
import homecards from './homecards'

export default (app) => {
  // Headers control
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    next()
  })

  // Initialize the app
  app.use(express.json());
  
  // Handle incoming GET requests to /homecards
  app.get('/homecards', async (req, res) => {
     await homecards.getHomeCards()
      .then(homecards => res.json(homecards))
      .catch(err => {
        if (err.status) res.status(err.status).json({ message: err.message })
        else res.status(500).json({ message: err.message })
      })
  });
  
}
