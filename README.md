### TODO 
- Implement the UI for user registration :  password should be at least 6 chars long, put this kind of condition on the UI
- Pre-commit installation. We use Husky for this, but it doesn't seem to work well
- Create class for a task : OOP implementation ?
- Refactorization
- Create a privacy policy for the app

Manual Steps :
- Test your app on different smartphones with Firebase Test Lab. Can this be integrated to the CI platform ? Yesy but it might be better to keep this step manual. To do that, run expo build:android after being connected to the Expo website, it will connect you to the Expo server that is going to build your APK/IPA (it can take a bit of time). Then you just have to put it in TestLab normally. The free version is limited to 5 daily test executions. I try to choose the most widely used phones with the largest ranges of APIs
- Deploy your app. To do that, you can integrate a third party solution to deploy your app from your CI build. You can use Fastlane or Gradle Play Publisher. You can deploy it manually by creating an account on Google Play console which is a kind of backend controlling center from where developers submit Play store apps for Android. There is a one-time fee of $25 by which a developer can open an account, loaded with functions and control features. 
This website describes the approach to deploy an app on the Play Store : https://appinventiv.com/blog/how-to-submit-app-to-google-play-store/

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

If you're forking this project, take note that if you use multiple package manager, it may raises issues. Use only expo to install packages

To finish the set up on Google Play Store, I need :
- Screenshots of the application
- Logo of the app with the dimensions 512 by 512 pixels
- A presentation image for phones, and tablets
Then I should be able to apply my APK file

Install mocha : npm install mocha --save-dev. Mocha is useless, we can do easy unit testing with jest and simple keywords (describe, assert, ...)
