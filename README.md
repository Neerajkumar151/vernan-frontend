# EZ Labs - Front-End Intern Assignment

A single-page responsive web application built as part of the **Front-End Intern Test** for **EZ Labs**.  
This project replicates the provided **Figma design** for the home page, including a fully functional and validated contact form integrated with the given API endpoint.

---

## 🚀 Live Demo
👉 [https://your-deployed-link.vercel.app](https://vernan-frontend.vercel.app/)

---

## 🧠 Objective
The goal of this assignment was to:
- Recreate the **Home Page** as per the Figma design.
- Implement **responsiveness** across desktop, tablet, and mobile.
- Integrate and validate a **Contact Form** using the provided API endpoint.
- Demonstrate attention to detail, clean code, and understanding of front-end best practices.

---

## 🛠️ Tech Stack
| Category | Tools / Frameworks |
|-----------|--------------------|
| **Frontend** | React.js (Vite) |
| **Styling** | CSS3 (Custom Responsive Design) |
| **API Handling** | Fetch API |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

---

## 📱 Responsiveness
The layout is fully responsive and tested on:
- 💻 **Desktops (≥1200px)**
- 🖥️ **Laptops (992px - 1199px)**
- 📲 **Tablets (768px - 991px)**
- 📱 **Mobile Devices (≤768px)**

Includes adaptive typography, flexible grids, and responsive positioning for all images and text elements.

---

## 🔗 API Integration
**Endpoint:**  
`https://vernanbackend.ezlab.in/api/contact-us/`  
**Method:** `POST`

### Example Request Body
```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "9876543210",
  "message": "This is a message"
}

```

## Example Response
```json
{
  "message": "Contact request submitted and email sent successfully",
  "data": {
    "id": 4711,
    "name": "Test user",
    "email": "testuser@gmail.com",
    "phone": "9876543210",
    "message": "This is a message from Postman test",
    "created_at": "2025-11-09T13:29:25.841653Z",
    "updated_at": "2025-11-09T13:29:25.841670Z"
  }
}
```

---

## Folder Structure 

├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutUs.jsx
│   │   ├── AboutTeam.jsx
│   │   ├── ArtCuration.jsx
│   │   ├── Branding.jsx
│   │   ├── FilmProduction.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── assets/
│   └── favicon.ico
├── package.json
└── README.md

---

## 📬 Contact Form Validation

Empty field prevention

Email regex validation

Network error handling

Displays “Form Submitted!” as a toast notification upon success.

---

## 🧾 Postman Verification

The endpoint was successfully tested and verified using Postman.
A ezlabs_contact_form_postman.json dump file is included for review.

---

## 🧰 Setup Instructions
1️⃣ Clone the Repository

git clone https://github.com/Neerajkumar151/ezlabs-assignment.git
cd ezlabs-assignment

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev

4️⃣ Build for Production
npm run build

---

## 📦 Deliverables

GitHub Repository (source code)

Live Deployment Link

Postman Collection Dump (.json)

---

## 👨‍💻 Author

Neeraj Kumar
Frontend Developer | React Enthusiast
📧 neerajkumar@example.com

🔗 LinkedIn  https://www.linkedin.com/in/neerajkumar1517/
 | GitHub  https://github.com/Neerajkumar151

 ---

 Submitted to: EZ Labs
Role: Front-End Intern (Recruitment Test)
Date: 09 November 2025

