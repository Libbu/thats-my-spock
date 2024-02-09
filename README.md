# Rock, Paper, Sheldon: Rock, Paper, Scissors, Lizard and Spock game

Rock, Paper, Sheldon is a website game created for the enjoyment of fans of the Big Bang Theory; and our site is replete with pop references and Sheldon appreciation. We, which is to say: the That’s my Spock team, have taken the game Rock, Paper Scissors, Lizard and Spock (RPSLS) from the Big Bang Theory (itself a reinvention of the ancient Rock, Paper and Scissors (RPS) game) and given it our own special touch.  

The game pits the site user against the computer; while the computer’s choice is entirely random, the user chooses their attack, which will ultimately decide their fate in the game.

This website is primarily targeted at those with a passion for the Big Bang Theory, but is also for those with a love for the game RPS, which, of course, means everyone in existence. For those who’ve been living under a rock, piece of paper or giant pair of scissors and are somehow unfamiliar with RPS, but also those unsure of the lizard and Spock update, we have included a clickable ‘help’ icon that opens up a rules panel for the user, which they can in addition click out of.   

Landing Page:
![Landing Page - main page before interaction](/media/landing-page-responsive.jpg)

## UX

The site’s theme was inspired by the widely popular TV show ‘The Big Bang Theory and our design concept was centred around this theme. We incorporated various assets and content relevant to the show to enhance the user experience. Some examples include the funky logo featuring Sheldon, comedic quotes from the character, and the premise that the opponent is actually Sheldon rather than the computer.

The site’s navigation is kept simple to accommodate a wide range of user needs while adhering to the Minimum Viable Product (MVP) concept. The rules modal is straightforward, and the entire website is contained within one page, aligning with our content requirements. This approach also allows our development team to easily adjust content based on the wireframes.

## User Stories

- As a **new user** I can **see the rules** so that **I can play the game**. 
- As a **user** I can **see the score** so that **I can see my progress**. 
- As a **new user** I can **see the number of tries** so that **I can see how many games I’ve won and how many times I can beat the internet**. 
- As a **site owner** I can **see the game displayed** so that **users can play the game**.
- As a **new user** I can **see the options buttons** so that **I know which one to pick**. 
- As a **returning user** I can **see the site is regularly updated** so that **I can play the game differently**. 
- As a **user who uses a screen reader** I can **have meaningful alt text on images** so that **I can play the game**. 
- As a **site owner** I want **my webpage to look good on all devices** so that users can **access it in different ways.**
- As a **user who uses a screen reader** I can **have meaningful alt text on images** so that **I can play the game**. 
- As a **user** I can **end the game/reset the score** so that **the person sat next to me can have a go**. 
- As a **site owner** I can **see a game that has increasing levels of difficulty** so that **I can entertain online users**.

## Scope

### High-Level Features

| **Homepage before interaction**   | **Homepage after interaction**   | **Rules panel** | **Website as a whole** |
|---|---|---|---|
| Player Options panel  | Battle Outcome panel | Rules image | Meaningful alt text |
| Tries Counter panel | User Choice display (image) and Computer Choice display (image) | | |
| Scores Panel |  User choice display (writing) and Computer Choice display (writing)  | | |
| Help/Rules Button | Play again Button and Reset Button | | |
| | Help/Rules Button | | |

|  **Feature** | **Value**  |  **Effort** |
|---|---|---|
| Rock Paper Sheldon  | High  | Medium  |
| Game Name/Logo | Medium  | Medium  |
| Homepage before interaction   | High | High  |
| Homepage after interaction  | High | High |
| Player Options Panel | High  | Medium |
| Tries Counter Panel | Medium  | High |
| Player Score Panel | Medium  | High  |
| Sheldon Score Panel | High  | High  |
| Battle Outcome Panel | High  | Medium  |
| Choice Images Display | High | High  |
| Choice Written Display | Medium  | Medium  |
| Play again Button and Reset Button | Medium  | High  |
| Help/Rules Button | High | Low  |
| Rules panel | High  | Low  |

| Feature  |  Priority |
|---|---|
| Landing Page | 1  |
| Game Zone -Landing Page after interaction | 1 |
| Game Name | 12  |
| Help/Rules Button | 6  |
| Rules page  | 5 |
| Player Options Panel | 2  |
| Tries Counter Panel | 9  |
| Scores Panel | 7  |
| Battle Outcome Panel | 3 |
| Choice Images Display | 4  |
| Choice Written Display | 10  |
| Play again Button and Reset Button | 8  |


- __Game Logo__

Our logo was lovingly crafted by the DEV team to appeal to our site’s target audience. Aesthetically it is well crafted, while its content is both humorous and topical; immediately introducing the user to the site’s thematic content and general purpose. It has been intentionally pixelated to encapsulate a nostalgic 80s to early 90s gaming aesthetic.  

![Game Logo](/media/logo.png)

- __Help/Rules Button__

  - The rules button is clear and well positioned in the head of the page in direct alignment with the logo. The user’s eyes move across the blue header from the red bordered logo to the red padded button, which is easily clicked to take the user to the rules page.  

![Help/Rules Button](/media/rules-button.png)

- __Rules Page__

  - The rules page is inspired by an already existing wiki image that clearly and visually outlines the rules of the game. Explaining to the user how the different choices within the game affect the outcome; for example, choosing rock defeats scissors, choosing scissors defeats lizard etc. It displays as a modal oveer the landing page when the rules button is clicked. 

![Rules Pagel](/media/rules-image.png)

- __Scores and Tries Panels on Landing Page__

  - After each round the page returns to the landing page layout with updated scores and tries tallies to let the user keep track of their progress in the game. The scores are displayed above the options panel, tying the previous set of choices made by the user to their next choice. The user sees their own score as the player score, while the computer (or JavaScript) is personified as the character Sheldon from the Big Bang Theory, adding a layer of personality to the game.  

![Score Panels](/media/score-panel.png)

- __Player Options Panel__

  - The player options panel displays beneath the score panels on the landing page, giving the user the options of rock, paper, scissors, lizard and spock.    

![Player Options Panel](/media/options-panel.png)

- __Battle Outcome Display, Choices Panels & Play Again and Reset Buttons__

  - Before returning to the landing page to commence the next round, the battle outcome is displayed at the top of the game zone. This informs the user as to whether they won, lost or drew the present round of RPSLS.
  - The choices panel includes an image and written display of the user’s choice and Sheldon’s RPSLS choices.
  - The play again and reset buttons are displayed at the bottom of the game zone window and serve separate but similar purposes. The play again zone takes the user to the landing page with the updated scores and try tally, while the reset button returns the user to the landing page with the scores and try tally board reset to zero.  

![Battle Outcome Display](/media/gamezone.png)

## Structure 

### Site Wireframes

- __Landing Page Desktop__

![Desktop home page](/media/final-wireframe.png)

- __Game Zone Desktop__

![Game Zone](/media/wireframe-gamezone.png)

- __Landing Page on Tablet & Mobile__

![Tablet & Mobile Landing](/media/mobile-tablet-landing.png)

## Surface

### Design

#### Chosen Colours

A Site palette was chosen that attempts to match a favoured shirt choice of Sheldon’s from the Big Bang Theory.  

The Palette was created using https://htmlcolorcodes.com

![Colour Picker](/media/colour-palette.png)

The colours are:

#FF0000 – Red

#87C5DF – Blue

#F1CE83 – Khaki (Orangey-Beige)

#### Fonts

 Electrolise for paragraph text.

 Electrolise for headings.

The Font was found on: https://www.helpmegeek.com/geeky-google-fonts-tech-projects/

#### Media

Images in general are used on our site to...

Home Page – images on homepage (buttons?) are used to...


## Technologies Used

- HTML

- CSS3 

- JavaScript


## Testing

Rock, Paper Sheldon has been tested on Safari, Opera, Chrome and Microsoft Edge.

Rock, Paper Sheldon has been thoroughly tested throughout the development process for responsiveness across devices using developer tools in Google Chrome.

### Validating

- HTML

  - We had a total of 17 HTML errors: including 13 errors concerning conventions around parent and child elements, 3 element tags that were not closed in accordance with w3 standards and one empty h3 tag, which was not an error but a javascript tag. [HTML Validation](https://validator.w3.org/)

  ![HTML](/media/html-errors-image-1.png)
  ![HTML](/media/html-errors-image-2.png)
  ![HTML](/media/html-errors-image-3.png)
  ![HTML](/media/html-errors-image-4.png)

- CSS
  - A total of 27 Parse errors were found during testing, although this doesn't meat W3C convention and can lead to problematic code, there is no evidence of Parse bugs interfering with the deployed version of the site. [CSS Validation](/media/css-test-errors.png)

  ![CSS](/media/css-test-errors.png)

- JavaScript
  - A total of 32 warnings were flagged by the JSHint Validator on the JavaScript. All of these flags are to do with variable names (let and const) and their availability on different browsers and some missing semicolons. [JSHint Validator](https://jshint.com/)

  ![JavaScript](/media/java-tests.png)
  ![JavaScript](/media/java-tests-2.png)

- Lighthouse tools were used to test the website

Desktop:

![desktop](https://github.com/LIGHTHOUSE DSK TEST IMAGE.jpg)

Mobile View

![mobile](https://github.com/LIGHTHOUSE MOB TEST IMAGE.jpg)

## User Story Testing

1. As a **new user** I can **see the rules** so that **I can play the game**.

- Our website has the rules nicely displayed on a rules panel which can be easily accessed via the rules button displayed in the header of our page. 
 
2. As a **user** I can **see the score** so that **I can see my progress**.

- Our site includes a score bar and tally/round display which updates the user on their progress in the game.  

3. As a **new user** I can **see the number of tries** so that **I can see how many games I’ve won and how many times I can beat the internet**. 

- This feature is included in the score bar in the form of a tally/rounds display. 

4. As a **site owner** I can **see the game displayed** so that **users can play the game**.

- The game is clearly displayed and easily navigated, with designated landing and game zones. The landing zone presents the user with game choices and updated score, while the game zone shows the outcome of the latest round played.  

5. As a **new user** I can **see the options buttons** so that **I know which one to pick**. 

- Options are clearly displayed at the centre of the landing page, with buttons changing colour when hovered over to make the game user friendly.  
 
6. As a **user who uses a screen reader** I can **have meaningful alt text on images** so that **I can play the game**. 

- Meaningful alt text has been included throughout our site to ensure images and icons are accessible to those using a screen reader. 

7. As a **site owner** I want **my webpage to look good on all devices** so that users can **access it in different ways.**

- The site has been tested for screen variability and responsiveness and is accessible across all devices and screen types. 

8. As a **user** I can **end the game/reset the score** so that **the person sat next to me can have a go**. 

-  After each round, in the game zone, the user is presented with the option to either ‘play again’ - keeping their current score and try tally, or ‘reset’ the game and start from scratch. 

9. As a **site-owner** I want **users to be able to navigate my site** so that **they can find information**

- All relevant information (including rules) are easily accessible or clearly displayed on the landing page and in the game zone. 

### Features For Future Implementation

1. As a **returning user** I can **see the site is regularly updated** so that **I can play the game differently**.

-  As a group we felt it would be important when creating this kind of game to have regular updates to enhance interactivity (such as adding more Sheldon quotes at the end of each round and images with the quotes), improve accessibility and add multiple levels of difficulty to the game. Another future update would be to implement the options to play a first three out of five rounds game between the user and Sheldon, or a first first to win ten rounds game.   

2. As a **site owner** I can **see a game that has increasing levels of difficulty** so that **I can entertain online users**.

- This might include the option to just play rock paper scissors; or have a default play rock, paper, scissors game, which the user must win a set number of points playing in order to unlock the spock and lizard features. 

3. As a **site owner** I can **see a game that has increasing levels of difficulty** so that **I can entertain online users**.

- This might include the option to just play rock paper scissors; or have a default play rock, paper, scissors game, which the user must win a set number of points playing in order to unlock the spock and lizard features. 

### Future Fixes: Tested Bugs

- In the next iteration we would of course fix the typos picked up by the HTML, CSS and Java testing to properly meet internet standards.   

## Known Issues and Bugs

ACCOUNT OF ANY BUGS FOUND FOLLOWING DEVELOPMENT, TESTING AND DEPLOYMENT IF ANY.

## Deployment

The site was deployed to GitHub pages. 

The live link can be found here:

[Rock Paper Sheldon](https://jsith90.github.io/thats-my-spock/)

## Credits 

### Content

Bootstrap 4 was used to assist in the structure and layout of the destinations page and the home page.

Fonts are from [Google Fonts](https://fonts.google.com/)

### Media

Images were taken from:
 [Pexels](https://www.pexels.com/)

Images were altered on [PineTools](https://pinetools.com/pixelate-effect-image) using the pixelate effect tool. 

[Photopea](https://www.photopea.com/) was used to create the rules panel. 

[Balsamiq](https://balsamiq.com/) was used to generate wireframes. 

Responsiveness tested on:
[Am I Responsive?](https://ui.dev/amiresponsive)

## README Content

The layout and contents of this README.md file are in large part influenced by the [CyberPixels](https://github.com/Libbu/CyberPixels/blob/main/README.md) README.md file from 1st Gwent group Hackathon project.

### Acknowledgements

The character of Sheldon from the sitcom Big Bang Theory is the creation of Chuck Lorre and Bill Prady, Big Bang Theory is property of Warner Bros. Television.

Javascript game logic derived from a [Youtube Walkthrough](https://www.youtube.com/watch?v=lV2BMXdsDmc) by [Dmytro Horystan](https://github.com/CompetentProgramming) before being modified to accomodate our DOM structure and other features.

Javascript function for incrementing scores borrowed from Code Institute's [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) walkthrough project

Further assistance gratefully received from CI tutors Iris, Kevin and Martin, and the wider CI slack community.

Unless otherwise noted all code and content is the work of That’s my Spock as part of the Gwent group’s 2nd 3-day Hackathon for their Code Institute Bootcamp.

### That’s my Spock:

- Sharon Simpson, DEV (HTLM & CSS) Lead
- Elizabeth Spivey, DEV (JavaScript) Lead
- Caelum Johnson, UX Lead
- Josh Sinclair-Thomson, AGILE Lead




