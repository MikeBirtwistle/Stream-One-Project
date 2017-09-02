# Stream One - Front End Project

## Overview

### What is this app for?

This app is designed to be a source of information for the famous rapper, Drake. The app contains navigation which can take you to background history, media available to browse including audio and video, tour information and a contact form for enquiries. The app is fully client side, so the contact form doesn't go anywhere, but it still has means of validation. The app has been designed to be fully responsive, and it was created using guidelines for the stream one project for the full stack developer course by the code institute.

### Some the tech used includes:

- [AngularJS](https://angularjs.org/)
    - I have used **AngularJS** to handle page routing (with angular-route). I have also built custom directives to neaten up the views used by the routing, and controllers to help with the functionality of certain views. 
- [Bootstrap](http://getbootstrap.com/)
    - I have used **Bootstrap** to allow me to style my app with relative ease. It has helped towards making the app fully responsive, and has also helped to make the navigation neater and easier.
- [JQuery](https.//jquery.com/)
	- I have used **JQuery** to allow faster and easier scripting for certain functions.
- [npm](https://www.npmjs.com/)
    - I have used **npm** to help manage some of the dependencies in my application.
- [bower](https://bower.io/)
    - I have used **Bower** to manage the installation of our libraries and frameworks. It is much faster and neater to use **Bower** in the command line, as opposed to going to the vendors directly.

### Other Contributions

Along with most of the app being written by myself, i have recieved large help and guidance from my mentor, and from the slack channel for code institute from other students. I have also relied on [Stack Overflow](https://stackoverflow.com/) in order to help me understand and fix any problems i may have encoutered. I also compiled my navbar-collapse.js from different posts on S.O, and have used [Google](https://google.com/) and youtube to help with other areas of the project, which includes the JQuery for the audio playlist. 

### The app can be viewed here - 

https://MikeBirtwistle.github.io/Stream-One-Project

## Documentation and testing

I continually ran manual tests throughout the creation of the project, to ensure every part was working bit by bit. By making changes then running the server with my local host i was able to see the changes i'd made each time. For the home page, i originally chose different backgrounds to suit each different device, as i struggled to find a picture that would resize and still look acceptable. As this got a little messy, i decided to have a plain black background, and add in image to the home page instead. This looked alot neater whilst looking at the other views, and i adjusted the size accordingly for the different views. I also added timers for the fade in properties for the home page picture and paragraphs for effect. After deciding on a black and white theme i chose different fonts for the navbar and footer. When it came to the social media icons, after various ideas and tests, i decided upon using font-awesome icons. To add effect to them, i had them change colour to the correct corresponding colour that the actual icons are. This posed a problem for the instagram icon, as it is multicoloured. To get around this problem, i used the background clip property and used a linear gradient to achieve the desired effect. After testing this on multiple browsers, including chrome, firefox, opera, and internet explorer 8 through 11 aswel as edge, it worked across all platforms apart from explorer 8. After a bit of digging, i found that microsoft had actually denounced IE 8, 9 and 10, and after talking with my mentor i decided to leave this as it was. For the about page i used bootstraps grid system, and resized the pictures accordingly so they'd fit. I did this by making small adjustments, then running the server to check. For the mobile view i had to change a few things. Due to me wanting a certain layout on the desktop view (text on the left, picture on the right. Then below that, picture on the left, text on the right, and back to text on the left, picture on the right below that) i had to adapt the tablet and mobile view so that two pictures or two pieces of text would not be next to each other, as they are vertical. To do this i called an instance of the pictures twice, and used the hide effect so that the desktop view would show one set of pictures, and the tablet and mobile views would show a different one. So even though the pictures were the same subject, they were actually different instances. For the albums view, i decided to make a sub-nav bar by using bootstrap pills. I overlapped the footer, as it looked too crowded with it above the footer, and left very minimal room on the mobile platform. For the albums part, i used a bootstrap carousel. I continually changed the sizes around ran the server to check which size fit best. For the audio playlist, i first added a third party plugin, but later decided to adapt a tutorial from youtube to help keep the overall project neater. For the videos section i used bootstrap modals, and set them to play automaitcally, and reset so that when they were closed and re-opened, they went back to the start. After sorting the various code out for each of them, i then ran the server again and tested each one to ensure they were correct, aswel as making sure the tabs routed properly. For the tour info view, testing was reasonably easy. I set each of the widths of the options to span the full length of the page, and made sure this was correct by viewing the page on desktop, tablet and mobile. For the enquiries view, i tested it by actually filling it out, to make sure the JS code validated the enquiry, then reset the fields afterwards. Once finished coding, i loaded the server on each platform and extensively tested it worked correctly by moving from one view to another and testing out all the functions. Everything is now working as it should. 
