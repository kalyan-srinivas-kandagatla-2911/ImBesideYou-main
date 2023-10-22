# Name:Kalyan Srinivas Kandagalta
# University:IIT Madras
# Department:Metallurgical and Materials Engineering

# Messenger Application 
A basic chat app which enable users across the world to signup and signin before authentication.
It enables dynamic realtime messaging between users.

## How it works
I used React.JS to create a web-based interface initially. For the backend, I used Google firebase SDKs. 
It enabled me for user-authentication, creating accounts, logging-in. Apart from this firestore-database to store
all authenticated accounts, contacted accounts, chats with the contacted accounts. Firestore enables realtime data
synchronization, i.e. when i send a message to anyone, that message is rendered in his screen immediately without either of us reloading the page or database. Whenever a user is logged-in new, firebase renders all the conversations and their chats from the database, which has been fed all the time user chats with anyone, or creates or new chat.

## Run the app using 'yarn run dev'

## How to use
Sign up using a username,email and password, now you can search for any existing users and chat with them realtime.

## Main dependencies :
Firebase Web SDK: Used for integrating Firebase services like Firestore (real-time database), authentication, and storage into the web application.

React Router: For navigation among views of various components in the React Application.

Firebase Authentication SDK: Firebase SDK that provides methods and tools for handling user authentication, including email/password authentication.

Firebase Firestore SDK: Firebase Web SDK that allows interaction with the Cloud Firestore database.

React Context API:  For managing global state in the application. 

Material-UI: A popular React UI framework that provides pre-built React components for faster and easier web development.