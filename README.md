
# InnoMail JavaScript Module

**Developer**: Mayank Chawdhari

---

## Description

InnoMail is a JavaScript module designed to simplify the process of sending emails using the Mailjet API. It allows you to send HTML and plain text emails securely and efficiently. The module uses a CORS proxy to overcome browser security restrictions and integrates seamlessly into your web applications.

---

## Benefits

- **Easy Integration**: Easily integrate email sending functionality into your web applications without dealing with server-side complexities.
- **Cross-Domain Compatibility**: Uses a CORS proxy to enable API requests from any domain.
- **Reliable Email Delivery**: Utilizes the Mailjet API for sending emails, ensuring high deliverability and security.
- **Customizable**: Allows you to customize the sender email, subject, and message content.

---

## Features

- **Send Emails**: Send emails to multiple recipients with custom subjects and messages.
- **Email Validation**: Checks if the email address format is valid before sending.
- **Error Handling**: Robust error handling with descriptive error messages.
- **Authorization**: Uses Mailjet API credentials securely.

---

## Function Table

| Function Name      | Description                                                                 | Why It's Needed                                |
|-------------------|-----------------------------------------------------------------------------|---------------------------------------------|
| `sendEmail()`      | Sends an email using the Mailjet API.                                          | Central function to send emails through the Mailjet API, providing the necessary parameters. |


---

## Why Use This?

Using this module offers several advantages:
- **Security**: All API calls are authenticated using API keys, ensuring secure communication with the Mailjet API.
- **Speed**: The use of a CORS proxy ensures quick API responses.
- **Flexibility**: Supports both plain text and HTML email formats.
- **Simplicity**: Simplifies the process of sending emails directly from your web application.

---

## Features

### 1. `sendEmail(recipientEmail, subject, message)`

**Description**:
Sends an email using the Mailjet API via a CORS proxy.

**Parameters**:
- `recipientEmail` (string): The email address of the recipient.
- `subject` (string): The subject of the email.
- `message` (string): The body of the email (can be HTML or plain text).

**Why It's Needed**:
This function is the core of the module, handling the email sending process. It takes user input for the recipient, subject, and message content, constructs the necessary data payload, and sends it to the Mailjet API.

**Implementation Details**:
- The email is sent via a CORS-protected proxy URL to prevent browser security restrictions.
- The email is sent as either plain text or HTML based on the `message` parameter.
- The function includes error handling to catch and log any issues during the email sending process.

---

## Future Enhancements (V1.1)

- **Add Support for Attachments**: Ability to send attachments along with emails.
- **Enhanced Error Reporting**: More detailed error messages for troubleshooting.
- **Advanced CORS Proxy Options**: Support for multiple CORS proxy configurations.
- **Integration with Analytics Tools**: Track email delivery statistics and user engagement.

---

## How to Use

### Prerequisites

1. **Mailjet API Key** and **Secret Key**:
   - Sign up for a Mailjet account and obtain your API key and secret.
   - Set the `MAILJET_API_KEY` and `MAILJET_SECRET_KEY` with these values in the JavaScript module.

2. **Sender Email**:
   - Set the `SENDER_EMAIL` to a valid email address that will be used as the sender's address.

3. **Include the JavaScript File**:
   - Add the JavaScript file to your project.
   - Ensure that the file is loaded on the same origin or use a CORS proxy as shown in the module.

### Example Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send Test Email</title>
</head>
<body>
    <div class="buttons">
        <input type="email" id="recipientEmail" placeholder="Enter your email" style="padding: 10px; margin-right: 10px; border-radius: 5px; border: 1px solid #FFD700; font-size: 1rem;"/>
        <button onclick="testEmail()">Let’s Test</button>
    </div>

    <script src="path/to/your-javascript-file.js"></script>
    <script>
        function testEmail() {
            const recipientEmail = document.getElementById('recipientEmail').value.trim();

            if (!recipientEmail || !validateEmail(recipientEmail)) {
                alert('Please enter a valid email address.');
                return;
            }

            const subject = '🚀 Discover InnoMail: Simplify Your Email Integration!';
            const message = `
                <h1 style="color: #FFD700;">Welcome to InnoMail!</h1>
                <p>InnoMail makes sending emails easy, fast, and secure. Start integrating email functionality today.</p>
                <p><a href="https://github.com/BOSS294/innoMail" style="color: #FFD700;">Explore InnoMail</a></p>
            `;

            sendEmail(recipientEmail, subject, message)
                .then(data => {
                    alert(`Email sent successfully to ${recipientEmail}!`);
                })
                .catch(error => {
                    alert('Failed to send email: ' + error.message);
                });
        }

        function validateEmail(email) {
            const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            return re.test(String(email).toLowerCase());
        }
    </script>
</body>
</html>
```
