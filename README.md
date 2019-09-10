# pet-book
https://abhinayaa1787.github.io/pet-book/

This is an app which helps the user to journal details about their pets(dogs). The pets data are stored in firebase. When the user signs in all their pets data are pulled from the firebase and displayed. Leaflet js locates the user and helps the user searches nearby vets/parks/petsmarts.

Technologies used to design this page used 
* HTML
* CSS
* Javascript
* Firebase
* Leaflet js
* Tomtom API

![Screenshot](/assets/images/Petbook.png)

#### HTML page
This has all the contents the users needs to see. This is the layout that appears on screen.

#### CSS 
This has the styles that are applied to the page

#### JQuery 
* When the app loads, the user is prompted for sign in authentication.

* If the user opts to use google sign in authentication, the user can save their pets data in firebase. If the user opts to sign in without authentication(guest user), then the user will not be allowed to save their pets data.

* Every time the user can view the list of their pets and these can be edited/updated/removed.

* Once the user signs in, the leaflet js will locate the user. 

* If the user clicks one of the buttons(vet/parks/petsmarts), the map will be marked with nearby 10 places and if one of the markers in the map is cicked, the row in the list of the nearby places will be highighted.

#### How it works

When the user opts to use google authentication, the user can view their profile information and can manage their pet's information

![Screenshot](/assets/images/Profile.png)

The user can add/edit pet's info 

![Screenshot](/assets/images/PetInfo.png)

Also the user's current location is markes on the leaflet map

![Screenshot](/assets/images/CurrentLocation.png)

If the user wants to search for a vet/PetSmart/Park near theit current location,  the desired button can be pressed and the map will be populated with the top 10 locations nearby

![Screenshot](/assets/images/Map.png)



