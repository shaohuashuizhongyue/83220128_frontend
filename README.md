# Contact Management System
This is a user-friendly contact management system that allows users to easily add, update, query, and delete contact information. Through an intuitive interface, users can input contact details such as name, creator, age, contact type, gender, image, contact information, address, and notes, and view all contacts in a list format.

## Table of Contents
Features
Tech Stack
Installation
Usage
Code Structure
Contributing
License
Acknowledgements
## Features
Add new contact information
Update existing contact information
Query contacts
Delete contacts
View a list of all contacts
## Tech Stack
VUE: For building the page structure
CSS3, ElementUI: For styling and layout
axios, JavaScript: For implementing front-end interactions and logic
Spring Boot: As the back-end service providing the API
## Installation
### Clone the Repository
bash
git clone https://github.com/yourusername/admin.git
cd admin
### Start the Front-End Service
Ensure that you have Node.js version 10.13.0 or higher installed. Then, run the following commands in the front-end project directory:

bash
npm install # Install dependencies
npm run serve # Run the application
## Usage
Open your browser and navigate to http://118.89.116.252:8080/login. After logging in, click the "Add" button in the contact management list to enter the contact's name, creator, age, contact type, gender, image, contact information, address, and notes. Then click the "Submit" button. The contact will be added to the list. You can click the "Edit" button to update information, enter a contact's name to search for them, or click the "Delete" button to remove a contact.

## Code Structure
admin/
├── src
   ├── components  # Components
   ├── filter      # Filters
   ├── plugins     # Plugins
   ├── router      # Routing
   ├── store       # State management
   ├── util        # Utilities
   ├── view        # Vue pages
       ├── contacts # Contacts page
       ├── Layout   # Layout
       ├── user     # User page
├── public         # Page styles, etc.
├── package.json   # Startup file
├── vue.config.js  # Global configuration file
components: Contains components for various parts of the interface, such as image uploads and pagination.
router: Manages URL routing.
store: Used to store user login information and whether to remember passwords.
view: Contains pages for adding, modifying, viewing, querying, and deleting contacts.
public: Includes styles, validations, etc., for the pages.
vue.config.js: Configuration for page access and ports.
## Contributing
Contributions to this project are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Submit a pull request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
Thanks to the following resources for their support in this project:

Spring Boot
MDN Web Docs
W3C
## Explanation
Project Title: States the name and provides a brief description of the project.
Features: Lists the main functionalities of the application.
Tech Stack: Describes the technologies used in the project.
Installation: Provides instructions for setting up the project.
Usage: Explains how to use the application.
Code Structure: Shows the organization of files in the project.
Contributing: Encourages contributions and outlines how to do so.
License: States the licensing information for the project.
Acknowledgements: Thanks resources that were helpful in the development of the project.
Feel free to modify or expand any sections to better fit your project's specifics!
