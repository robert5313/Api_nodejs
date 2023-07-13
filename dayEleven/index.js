const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(3000, () => console.log(`Example app is listening on port 3000.`));