
// Mailjet API credentials
const MAILJET_API_KEY = '3ae8ac129fa7a5dff81406ae11104dc8';
const MAILJET_SECRET_KEY = 'bf6151b80762c7149c039084d05e9f58';
const SENDER_EMAIL = 'programmerslifee@gmail.com'; // Email address that will send the email

/**
 * Sends an email using the Mailjet API.
 * @param {string} recipientEmail - The email address of the recipient.
 * @param {string} subject - The subject of the email.
 * @param {string} message - The body of the email.
 */

function sendEmail(recipientEmail, subject, message) {
    const url = 'https://api.mailjet.com/v3.1/send';

    const body = JSON.stringify({
        Messages: [
            {
                From: {
                    Email: SENDER_EMAIL,
                    Name: 'InnoMail Service',
                },
                To: [
                    {
                        Email: recipientEmail,
                        Name: 'Recipient',
                    },
                ],
                Subject: subject,
                TextPart: message,
                HTMLPart: `<p>${message}</p>`
            },
        ],
    });

    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`),
    };

    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Email sent successfully:', data);
            return data;
        })
        .catch(error => {
            console.error('Failed to send email:', error);
            throw error;
        });
}
