const express = require('express')
const app = express()

app.use('/images', express.static(process.cwd() + '/images'))

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log(`App listening on port 3000`)
})