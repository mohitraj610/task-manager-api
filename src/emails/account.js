const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeMail = (email,name) => {
    sgMail.send({
        to : email,
        from : '9991jartihom@gmail.com',
        subject : 'Thanks for joining in!',
        text : `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then(()=> {
        console.log('Working')
    }).catch((e)=> {
        console.log(e)
    })
}

const sendCancelationMail = (email,name) => {
    sgMail.send({
        to : email,
        from : '9991jartihom@gmail.com',
        subject : 'Sorry to see you go!',
        text : `Goodbye, ${name}. I hope to see you back sometime soon.`
    })

}

module.exports = {
    sendWelcomeMail : sendWelcomeMail,
    sendCancelationMail : sendCancelationMail
}