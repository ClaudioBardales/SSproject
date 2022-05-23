- NOTES FOR PROJECT

* I need to build a booking app.
* They gave me a mock up to use so I will use this and I don't have to design this.

- FUNCTIONAL REQUIREMENTS

* I need to be using regex to validate that the user is using an email. - Done! -> With some errors, but will fix them later.

* When the user click on the button "Continue to Schedule a Time" an error needs to shown if the user used incorrect values and should be required to fix the errors.

* Once the forms are correct, when you click on the continue button will transition to two possible pages, the appropriate page will appear based on the choices the user made.

* If the user chooses "Business Size" to "1-10" and/or "Importance indicator" to "Document Storage, Full Text Search, and Price", the page will tell the user that they are unqualified should render if not then then it will show the page that they are qualified.

* The Submit buttons needs to take account all of the inputs that the forms and the radio buttons as well.

- How to code the last section.

* What we need to do is to use if() and use map. I was thinking I can add an eventlistner and make an if statement to replace the HTML with a mapped rendered HTML based on the choices that the user makes.

* So Now we made it so that when the submit buttons clicks it does something. I used console.log to make sure it works. Now we need to figure out to grab the radio button and option values.

* Grabbed The Radio and Options Values, Found out how to use the button based on choices. Don't have to use map() or anything like that. Just make two external html files and style them and then add them on the if statement based on what the user chooses!
