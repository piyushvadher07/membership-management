# Membership Management Application

## Overview

This full-stack web application enables users to register, log in, and manage their membership details. It features a multi-section membership form with file upload capabilities, allowing users to update and remove images/files when modifying their membership information.

## Features

- **User Authentication:**

  - **Registration:** Users can create an account with email, password, and confirm password fields. Email uniqueness and password strength are validated.
  - **Login:** Users can access their accounts using email and password with JWT-based authentication.
  - **Logout:** Users can securely log out of their accounts.

- **Membership Management:**
  - **Create Membership:** Users can create a new membership with the following sections:
    - **Member Details:** Name, Plot/Shed No., Road No., Company Type, Email, Phone & Mobile.
    - **Representative Details:** Name, Designation, Email, Mobile, Phone, Representative Photo (mandatory, supports file upload).
    - **Other Details:** Website, Product Name, Company Category, Torrent Service No., GSTIN No., AMC Tenement No., Udyog Aadhaar No.
    - **Attachments:** Upload files (4 required) including Allotments Letter, Possession Letter, Office Order, Transfer Order.
    - **Additional Documents:** Upload three extra documents: Plot/Shed Size, Water Connection No., Shed Nos, Con. Size (MM), Area Size (Sq. Mtrs).
  - **Update Membership:** Users can update their existing membership details and manage associated files.

## Technologies Used

- **Backend:**

  - Node.js with Express
  - MongoDB
  - Multer for file handling
  - JWT for authentication

- **Frontend:**
  - React with TypeScript
  - Axios for API requests
  - React Router for navigation

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/piyushvadher07/membership-management.git
   ```
