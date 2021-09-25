### TODO 
- Implement the UI for user registration :  password should be at least 6 chars long, put this kind of condition on the UI
- Implement test + CI/CD
- Pre-commit installation
- Create class for a task : OOP implementation ?

Run the app in local on your phone :
- Set up your phone in the developer mode
- Enable USB debugging
- Plug your phone on your PC
- run expo start

Run ESLinter to check problems (unused imports, ...) :
- npm install eslint --save-dev
- npx eslint file_you_want_to_chek.js

Install the packages needed to test the components :
- npm install --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
- yarn add mocha

Should I use Mocha for the Unit testing of functionalities and Jest for Unit testing of components ?