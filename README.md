
# Albums list React app


This project is a simple album liist built using React. It fetches data from the API endpoint https://jsonplaceholder.typicode.com/albums to display a list of albums. Additionally, it allows you to perform various operations such as adding, updating, and deleting albums.

Prerequisites
Make sure you have the following software installed on your system:

Node.js
NPM (Node Package Manager)

Installation
Install the required dependencies:



# Installation

install the required dependencies:
npm install





## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Run Locally

Clone the project


Go to the project directory

```bash
  cd album-list
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Usage


To start the application, run the following command: npm start

This will start the development server and open the application in your default browser. You can also access it by visiting http://localhost:3000 in your browser.

The application will fetch the albums from the API and display them in a list. Each album will show its title and ID.

## Add an Album - 
To add an album, click on the "Add Album" button. This will open a form where you can enter the details of the album, such as the title. Once you have entered the information, click on the "Save" button to make a POST call to the API and save the album in the server. The new album will be added to the list immediately.

## Update an Album - 
To update an album, click on the "Edit" button next to the album you want to update. This will open a form populated with the existing details of the album. Make the necessary changes and click on the "Save" button to make a PUT call to the API and update the album in the server. The album in the list will be updated with the new information.

## Delete an Album - 
To delete an album, click on the "Delete" button next to the album you want to delete. This will prompt a confirmation dialog. Click on "Yes" to make a DELETE call to the API and remove the album from the server. The album will be removed from the list.

Please note that the API used in this project is a dummy API (https://jsonplaceholder.typicode.com/albums), and the requests made are not actually persisted. However, the requests are valid and will simulate the expected behavior.



## API Reference

#### https://jsonplaceholder.typicode.com/albums


## Demo

https://album-list-react-app.netlify.app/

