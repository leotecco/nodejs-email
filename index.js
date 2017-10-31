const express = require('express')
const app = express()
const email = require('./email')

app.get('/', (req, res) => res.send('Server ON!'))
app.post('/sendmail', (req, res) => {
  const mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };

  email.sendMail(mailOptions)
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(error => {
      console.log(error)
      res.send(error)
    })
})

app.listen(3000, () => console.log('Server ON!'))