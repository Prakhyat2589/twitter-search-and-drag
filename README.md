## Project Owner

Prakhyat Gailani

## Project Title

Twitter Trend and Search and Drag

## Dependencies and steps on how to install

1. Project is created in ReactJs library (Front-End) & Node.js/Express.js (Back-end)
2. All the dependencies and modules are mentioned in package.json file
3. Open `twitter-search` folder in VScode editor or any editor of your choice
4. Open Terminal
5. Type `cd twitter-search` command if your terminal is not pointed in twitter-seacrh folder
6. Run `npm install` command which will create 'node_modules' installing required packages to run the Front-end and Back-end concurrently
7. Type `cd twitter-server` command
8. Run `npm install` command which will create 'node_modules' installing required packages to run the Node.js/Express.js
9. Type `cd ..` command to point the terminal back to `twitter-search` folder
10. Type `cd twitter-trends` command
11. Run `npm install` command which will create 'node_modules' installing required packages to run the Reactjs application
12. Type `cd ..` command to point the terminal back to `twitter-search` folder
13. Type `npm run dev` command and it will run back-end and front-end application concurrently
14. `twitter-server` application will run on `localhost:4000`
15. `twitter-trends` application will run on `localhost:3000` which is default port
16. Open `localhost:3000` in browser to access the application

## About the application

When App is started User is able to see 10 lastest tweets on left column. User can save the tweets by drgagging to right column. Even if the page is refreshed the saved tweets in right column will be there. User can also change the order of the saved tweets as per its convenience. User can also move remove the saved tweet by dragging tweet from right column to left column.

To seacrh about a particular topic user can enter the keyword in search bar and press Enter. Latest 10 tweets related to search keyword will appear in left column.

If there is no tweet related to search keyword, `No result found` message will be displayed.

## Stack

- Languages: HTML5, CSS3, JavaScript (ES6)
- Libraries: ReactJS, Express.js
- Api: Twitter V2 api.
