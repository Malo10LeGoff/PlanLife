### TODO 
- Add features to classes (more details, OOP, ...)
- Upload the app on the Apple store
- Forgot password feature

### How to run the app on your phone :

Run the app in local on your phone :
- Clone the repo and run npm install
- Set up your phone in the developer mode (can be different according to what phone you have)
- Enable USB debugging 
- Plug your phone on your PC
- run expo start
- Choose the "Local" connection
- Run the Android/iOS simulator according to what phone you plugged

### Linter used :

Run ESLinter to check problems (unused imports, ...) :
- npm install eslint --save-dev
- npx eslint file_you_want_to_chek.js

### Test the code :
- Execute : npm test
It will trigger the Jest runner to run the unit and snapshot tests written. It is a test automatically done in the CI pipeline
- You can also test your app on virtual phones by using Firebase Test Lab. Just run expo build:android, download your apk file and upload it on Firebase Test lab. Please take note that the free version is limited to test only 5 different phones daily, so you better choose the most common phones you can find.

### Privacy Rules :
If you use the application and you want to know what I do with what data you entered, privacy rules are described here : https://www.termsfeed.com/live/21304c7b-12b7-422f-a42a-74e20b6b33c0

### Test the App :
You might want to go straight to the app to test how it runs !


fake credentials : "malolegoff@gmail.com", "balbababa"