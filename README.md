# ✨ QR Code Generator – Web App

A web-based **QR Code Generator** built using **Node.js**, **Express.js**, and **EJS**. This lightweight and visually pleasing application allows users to convert any **text or URL into a downloadable QR code** instantly.

## 📌 Features

- 🔗 Convert any text or URL into a QR Code
- 🎨 Stylish, feminine UI with custom CSS and Google Fonts
- ⚡ Real-time QR code generation using the `qrcode` npm package
- 🖼️ Server-side rendering using EJS templates
- 📥 Option to download the QR code image
- 📱 Fully responsive design

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Styling**: Custom CSS, Google Fonts
- **QR Generation**: [qrcode npm package](https://www.npmjs.com/package/qrcode)

## 📂 Project Structure

qr-code-generator/
├── public/
│ └── styles.css
├── views/
│ ├── index.ejs
│ └── result.ejs
├── app.js
├── package.json
└── README.md

## ⚙️ Installation & Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
Install dependencies

npm install
Run the application

node app.js
Open in browser
Visit http://localhost:3000

🧪 Usage
Enter any text or URL in the input box
Click Generate QR Code
View your QR code
Click Download to save the image
