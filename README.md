
# ResumeWizards

This project was devloped to help a job seeker to craft his/her resume the way they want. As we are applying for multiple job and we need to constantly update our resume according the job description and also when we aquire some new skills this project will easily let you edit your resume and will alos help you to make multiple resume by using only one account.

My main motive behind this project was to let the user create tailored resume according to the job description. I have used multiple website for creating resume but the thing was they limited their service to only one resume or they watermarked the resume or they will not let me download the resume and ask me to subscribe to their plans. At that time I thought I should create my own resume maker that can help others to create their own resume without subscribing to it.

### The Technology I have used is -
* React
* Tailwind CSS
* Redux
* React-pdf/renderer
* Google Firebase

### The Key Features of this project are.

1. Resume
2. Multiple Template
3. Multiple Resume
4. AI Powerd Resume Builder - [Future Release]
5. ATS Checker - [Future Release]
<br>

>**Warning:**
The react-pdf/renderer seems to not work propely on firefox browser. So kindly use the Chrome browser for testing. I am currently resolving the issue.



## Installation

1. Clone this repository
2. Go to to the Root directory and open your prefered Terminal.
3. Write this command it will install all the required dependencies. I am using npm for this you can use yarn also.
```
npm i
```
4. As I have used Firebase for authentication and also for storing the users data you need to create a app in your firebase and then store the creadentials in the .env file. As I have used vite for creating my React app you need to used the 'Vite_' before the variable.

5. write this command to run in your local machine.
```
npm run dev
```
    
## Live Example

Here is the link for the live testing.
[Live Project](https://resumewizard.onrender.com)

The Steps to use the project.

1. SignUp using your Email and password.
2. Then Click on Add Icon on the home page.
3. Then Select the name of the Resume that you want save it as and the template you would like to use.
4. Fill your Details and then click on Next.
5. After filling all the details you will be able to see the Resume and can also download it.

## License

[MIT](https://choosealicense.com/licenses/mit/)


