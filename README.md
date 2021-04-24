![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# MEETPORTUGAL website
[View the live project!](https://joseamgomes.github.io/CRAFTIEYANIE/)

This website was created as a touristic guide for Portugal mostly focused on hotel search. Portugal has much to offer and most people only know about the famous Algarve area or Lisbon so even though they are great places to visit I wanted to include some other great areas!
## User Experience (UX)
 ### User Stories
     
     1.1- As a user  
        1.1.1- I need to navigate easily and fluidly through the website;
        1.1.2- I want to easily recognise what the website is about;
        1.1.3- I must be able to understand what diferent posibilities for holiday destinations have to offer;
        1.1.4- I should be able to find what hotels are available all over Portugal;
        1.1.5- I require an easy way to find an email in case I want further information;
    
2.1-Homepage Wireframe
[index Desktop Wireframe](assets/images/INDEX_WIREFRAME.png) 

2.2-Porto page Wireframe
[Porto Desktop Wireframe](assets/images/PORTO_WIREFRAME.png) 
    
2.3-Lisboa page Wireframe
[Lisboa Desktop Wireframe](assets/images/LISBOA_WIREFRAME.png) 

2.4-Algarve page Wireframe
[Algarve Desktop Wireframe](assets/images/ALGARVE_WIREFRAME.png) 

2.5-Madeira page Wireframe
[Madeira Desktop Wireframe](assets/images/MADEIRA_WIREFRAME.png) 

### Design

    3.1- Color Scheme
    The two colors used are green(rgb(22, 109, 105) and white.

    3.2- Typography
    In this website the titles are written in Cinzel while all the other text is Source Sans Pro. All of them are backed up by sans-serif. 

    3.3- Images
    Multiple images are included in the website to give context and information to the website.

## Features

    4.1- Website designed to be responsive on all sizes;
    4.2- Website uses Google maps Api to show the location of the cities and their atractions. On hotel page the google api autocompletes itself after being provided a city and shows all the hotels in the area.

## Technologies Used

### Languages Used

    5.1- HTML5;
   
    5.2- CSS3;

    5.3- Javascript

### Frameworks, Libraries and Programs Used

    6.1- Bootstrap 4.4.1:
    Used to style and make website responsive;

    6.2- Javascript:
    Used to toggle content and also to highlight in a diferent color all the text that can be toggled. Also used tp integrate google maps API;

    6.3- Google Fonts:
    Used to style all the texts by importing Cinzel and Source Sans Pro;

    6.4- jQuery:
    Used to make navigation bar responsive and make the dropdown button work;

    6.5- GitHub:
    Used to store and manage the project;

    6.6- Balsamiq:
    Used to create my Wireframes;

    6.7-Google maps library:
    Used to provide both maps, markers and autocomplete function.

## Testing

The website's code passed both W3C HTML5 test and CSS3 test.

Also on hotels page a city needs to be provided. If any other characters that dont match a city name is provided then google maps wont change as it wont identify a city name on it's autocomplete function.

### Testing User Stories

1.1.1- As a user I need to navigate easily and fluidly through the website:

    All Navigator links work perfectly and are responsive. Turns into dropdown menu when it is supose to;
    Google maps works fluidly as intended;

    Test #: 1
    Action Taken: Click on "MEETPORTUGAL" in Nav bar
    ﻿"Before" State: No hoover or change.
    ﻿"After" State: index.html was loaded when pressing logo on whatever page we are located.
    ﻿Test Result: Successful
    
    Test #: 2
    Action Taken: Click on "Porto" in Nav bar
    ﻿"Before" State: Porto link had underline while hoovered on all pages.
    ﻿"After" State: Porto.html was loaded when pressing Porto link on whatever page we are located.
    ﻿Test Result: Successful

    Test #: 3
    Action Taken: Click on "Lisbon" in Nav bar
    ﻿"Before" State: Lisbon link had underline while hoovered on all pages.
    ﻿"After" State: Lisbon.html was loaded when pressing Lisbon link on whatever page we are located.
    ﻿Test Result: Successful

    Test #: 4
    Action Taken: Click on "Algarve" in Nav bar
    ﻿"Before" State: Algarve link had underline while hoovered on all pages.
    ﻿"After" State: Algarve.html was loaded when pressing Algarve link on whatever page
    ﻿Test Result: Successful

    Test #: 5
    Action Taken: Click on "Madeira" in Nav bar
    ﻿"Before" State: Madeira link had underline while hoovered on all pages.
    ﻿"After" State: Madeira.html was loaded when pressing Madeira link on whatever page
    ﻿Test Result: Successful

   


1.1.2- As a user I want to easily recognise what the website is about:

    Home page clealy explains what contry we are talking about by restricting the search to Portugal and the map autofocusing there. Search box place holder also atutomaticly asks for a Portuguese city.
Test #: 1
Action Taken: Tried finding Barcelona on search
﻿"Before" State:"Find a portuguese city".
﻿"After" State: Autocomplete only suggested Portuguese cities unti it stoped giving me results.
﻿Test Result: Successful
    

1.1.3- As a user I must be able to understand what diferent posibilities for holiday destinations have to offer:

    Four different destinations are further analised on the project in an easy to understand  way;

    Test #: 1
    Action Taken: Tried toggles
    ﻿"Before" State:"Question toggles are automaticly open while atraction toggles are closed by default".
    ﻿"After" State: Both question toggles were able to be closed while atraction toggles were openable.
    ﻿Test Result: Successful

    Test #: 2
    Action Taken: Tried mouseenter
    ﻿"Before" State:"Question and atraction names are green".
    ﻿"After" State: Both question and atractions names turn red when the mouse enters making the user understand the are clicable.
    ﻿Test Result: Successful



    

1.1.4- As a user I should be able to find what hotels are available all over Portugal:

    The reviews are organised by what kind of products they refer to while being clear and simple;
     Test #: 1
    Action Taken: Tried remote vilages (Aves)
    ﻿"Before" State:"Map focused on Portugal by default".
    ﻿"After" State: Searched Aves and it found 2 hotels giving me the correct info-window on each.
    ﻿Test Result: Successful


1.1.5- As a user I require an easy way to find an email in case I want further information:

    Footer clearly show email and is present on all pages.
     

## Further Testing

    Website was tested on Firefox and Chrome on all diferent sizes from mobile to desktop.
    Friends and family tested and critiqued website which helped with some last few design details.


## Known Bugs

    1-In hotels page after one search has been done if the user refreshes the page the previows search will still be on text box.



## Credits

### Code 

Nav was based on my previews milestone project with changes to fit into the new website's goal.

Google maps code was taken from google maps API website.

### Content 

    All content was written by the developer other than google maps code.

### Media

    All images are from the google images of Portugal landscapes.

## Deployment 

### Github Pages 
The project was deployed to GitHub Pages using the following steps:

    1-Log in to GitHub and locate the GitHub Repository;

    2-At the top of the Repository, press "Settings" Button;

    3-Scroll down the Settings until the "GitHub Pages" Section.

    4-Under "Source", click the dropdown and select "Master Branch".

    5-After the page refreshes scroll back into the previous section and find the published site link.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account so that we can modify it without being worried about changing the orinal repository.

    1-To do this log in to GitHub and locate the GitHub Repository;

    2-At the top of the Repository just above the "Settings" Button press the "Fork" Button;

    3-You will now have a forked vertion of the original repository in your GitHub account;

### Making a Local Clone

    1-Log in to GitHub and locate the GitHub Repository;

    2-Under the repository name, click "Clone or download";

    3-To clone the repository using HTTPS, under "Clone with HTTPS", copy the link;

    4-Open Git Bash;

    5-Change the current working directory to the location where you want the cloned directory to be made;

    6-Type git clone, and then paste the URL you copied previously;

    7-$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

    8-Press Enter. Your local clone will be created.

## Acknoledgements

My Mentor for guiding me and making sure I dont skip important steps. Special thanks to code institute online tutors that helped me make google maps API work and tried to help me integrate a different Hotel api(even if it did not work).

