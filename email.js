const nodemailer = require('nodemailer')

const createUser = (account) => ({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: { user: account.user, pass: account.pass }
})

const sendMail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    nodemailer.createTestAccount((error, account) => {
      if (error) {
        reject(error)
        return;
      }

      const transporter = nodemailer.createTransport(createUser(account))
      transporter.sendMail(mailOptions, (error, success) => {
        if (error) {
          reject(error)
          return;
        }

        resolve(success)
      })
    })
  })
}

module.exports = { sendMail };