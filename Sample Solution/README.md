Skip to content

Project file structure for contacts app
New chat
Agents
Spaces
Spark
Preview
Oisin003
Copilot Pro
Copilot Chat
Project file structure for contacts app
You said: Web Component Development: CA2 Class Test November 17th 10:30
Web Component Development:
CA2 Class Test
November 17th 10:30 – 12:30
You are required to develop a web application using React in conjunction with JSON-Server
to retrieve and manipulate contact information through a RESTful API. The application must
incorporate React Router to facilitate navigation between views.
The selection and layout of contact information s left to the user's discretion.
Retrieval of All Contacts (REST GET)
The application must issue a GET request to obtain the complete list of contacts.
For each contact, display: Name, Age, Company, and Friends.
Contact Lookup by Identifier
Provide a search mechanism that allows the user to retrieve a specific contact by entering
the contact's ID.
The resulting view must display the following fields: Name, Age, Gender, email and
phone.
Sorting Functionality
Implement functionality enabling users to sort the contacts by age: Ascending and
Descending order.
State-Based Filtering
Create a view that lists all contacts associated with the state Indiana.
RESTful Deletion Operations
The application must support the removal of contacts with the following IDs: 10, 11 and 15
Marking scheme
Client-side routing 10
Listing all contact info. 10
Contact search by ID 10
Sorting by age in ascending/descending order 10
Gender-based filtering 10
Filter contacts from Indiana 15
REST deletion 10
GUI – use of CSS module 25    {
	"contacts": [
    {
      "id": 0,
      "age": 38,
      "name": "Juliet Wells",
      "gender": "female",
      "company": "XOGGLE",
      "email": "julietwells@xoggle.com",
      "phone": "+1 (913) 412-3410",
      "address": "522 Livingston Street, Kaka, Georgia, 3604",
      "friends": [
        {
          "id": 0,
          "name": "Marianne Bean"
        },
        {
          "id": 1,
          "name": "Spencer Barnes"
        },
        {
          "id": 2,
          "name": "Andy Murphy"
        }
      ]
    },
    {
      "id": 1,
      "age": 20,
      "name": "Rush Brady",
      "gender": "male",
      "company": "JIMBIES",
      "email": "rushbrady@jimbies.com",
      "phone": "+1 (887) 566-2815",
      "address": "260 Bowne Street, Fowlerville, Oregon, 9079",
      "friends": [
        {
          "id": 0,
          "name": "Margie Curry"
        },
        {
          "id": 1,
          "name": "Kline Cummings"
        }
      ]
    },
    {
      "id": 2,
      "age": 34,
      "name": "Woodard Orr",
      "gender": "male",
      "company": "WAAB",
      "email": "woodardorr@waab.com",
      "phone": "+1 (933) 574-3925",
      "address": "349 Ryder Street, Walker, New Hampshire, 3013",
      "friends": [
        {
          "id": 0,
          "name": "Flores Compton"
        },
        {
          "id": 1,
          "name": "Trujillo Dudley"
        }
      ]
    },
    {
      "id": 3,
      "age": 40,
      "name": "Rosario Snow",
      "gender": "male",
      "company": "INQUALA",
      "email": "rosariosnow@inquala.com",
      "phone": "+1 (968) 503-3531",
      "address": "394 Broome Street, Coventry, Mississippi, 137",
      "friends": [
        {
          "id": 0,
          "name": "Kerri Stevenson"
        },
        {
          "id": 1,
          "name": "Virgie Lawson"
        }
      ]
    },
    {
      "id": 4,
      "age": 25,
      "name": "Maryellen Greene",
      "gender": "female",
      "company": "CUJO",
      "email": "maryellengreene@cujo.com",
      "phone": "+1 (978) 525-3788",
      "address": "335 Georgia Avenue, Greer, Oregon, 5850",
      "friends": [
        {
          "id": 0,
          "name": "Brianna Pollard"
        },
        {
          "id": 1,
          "name": "Rivera Sexton"
        }
      ]
    },
    {
      "id": 5,
      "age": 32,
      "name": "Harrison Pope",
      "gender": "male",
      "company": "EMOLTRA",
      "email": "harrisonpope@emoltra.com",
      "phone": "+1 (829) 480-3962",
      "address": "651 Pierrepont Street, Lavalette, Illinois, 7680",
      "friends": [
        {
          "id": 0,
          "name": "Patel Jenkins"
        },
        {
          "id": 1,
          "name": "Savage Klein"
        }
      ]
    },
    {
      "id": 6,
      "age": 24,
      "name": "Payne Coffey",
      "gender": "male",
      "company": "EXOSTREAM",
      "email": "paynecoffey@exostream.com",
      "phone": "+1 (831) 479-2632",
      "address": "827 Chase Court, Nogal, Pennsylvania, 9380",
      "friends": [
        {
          "id": 0,
          "name": "Vicki Avery"
        },
        {
          "id": 1,
          "name": "John Barnes"
        },
        {
          "id": 21,
          "name": "Vickie Schwartz"
        }
      ]
    },
    {
      "id": 7,
      "age": 34,
      "name": "John Wilkinson",
      "gender": "male",
      "company": "GEOLOGIX",
      "email": "hatfieldwilkinson@geologix.com",
      "phone": "+1 (985) 561-2357",
      "address": "466 Taaffe Place, Thatcher, Virgin Islands, 4000",
      "friends": [
        {
          "id": 0,
          "name": "Jessica Hunt"
        },
        {
          "id": 1,
          "name": "Lula Fuentes"
        }
      ]
    },
    {
      "id": 8,
      "age": 37,
      "name": "Robinson Gallagher",
      "gender": "male",
      "company": "ETERNIS",
      "email": "robinsongallagher@eternis.com",
      "phone": "+1 (971) 517-2100",
      "address": "399 Wythe Place, Nash, Oregon, 9708",
      "friends": [
        {
          "id": 0,
          "name": "Miriam Gregory"
        },
        {
          "id": 1,
          "name": "Hutchinson Boone"
        }
      ]
    },
    {
      "id": 9,
      "age": 35,
      "name": "Patrica Pugh",
      "gender": "female",
      "company": "ISOTRONIC",
      "email": "patricapugh@isotronic.com",
      "phone": "+1 (843) 566-2658",
      "address": "527 Gerald Court, Woodlake, South Carolina, 852",
      "friends": [
        {
          "id": 0,
          "name": "Barnes Neal"
        },
        {
          "id": 1,
          "name": "Fred Smitt"
        },
        {
          "id": 2,
          "name": "Gonzales Harper"
        }
      ]
    },
    {
      "id": 10,
      "age": 28,
      "name": "Antonia Carr",
      "gender": "female",
      "company": "CEPRENE",
      "email": "antoniacarr@ceprene.com",
      "phone": "+1 (978) 415-2087",
      "address": "166 Kimball Street, Welch, Indiana, 6187",
      "friends": [
        {
          "id": 0,
          "name": "Amber Hood"
        }
      ]
    },
    {
      "id": 11,
      "age": 39,
      "name": "Frazier Stephens",
      "gender": "male",
      "company": "TERRAGO",
      "email": "frazierstephens@terrago.com",
      "phone": "+1 (863) 481-2671",
      "address": "451 Jackson Court, Kirk, New Mexico, 3558",
      "friends": [
        {
          "id": 0,
          "name": "Burnett Maddox"
        },
        {
          "id": 1,
          "name": "Ellen Ryan"
        }
      ]
    },
    {
      "id": 12,
      "age": 32,
      "name": "Alicia Hahn",
      "gender": "female",
      "company": "STELAECOR",
      "email": "aliciahahn@stelaecor.com",
      "phone": "+1 (981) 457-3922",
      "address": "294 Tompkins Avenue, Shrewsbury, Hawaii, 8714",
      "friends": [
        {
          "id": 0,
          "name": "Mcgee Nunez"
        },
        {
          "id": 1,
          "name": "Williamson Bonner"
        }
      ]
    },
    {
      "id": 13,
      "age": 20,
      "name": "Jana Mcdaniel",
      "gender": "female",
      "company": "ZENTURY",
      "email": "janamcdaniel@zentury.com",
      "phone": "+1 (931) 443-2208",
      "address": "369 Sackett Street, Odessa, Massachusetts, 278",
      "friends": [
        {
          "id": 0,
          "name": "Arlene Walters"
        },
        {
          "id": 1,
          "name": "Mooney Nolan"
        },
        {
          "id": 2,
          "name": "Phi Neal"
        },        
        {
          "id": 3,
          "name": "Mark Smith"
        }
      ]
    },
    {
      "id": 14,
      "age": 21,
      "name": "Melva Drake",
      "gender": "female",
      "company": "SLOGANAUT",
      "email": "melvadrake@sloganaut.com",
      "phone": "+1 (804) 427-2383",
      "address": "429 Aitken Place, Hoehne, Utah, 5834",
      "friends": [
        {
          "id": 0,
          "name": "Henderson Combs"
        },
        {
          "id": 1,
          "name": "Alfreda Ashley"
        }
      ]
    },
    {
      "id": 15,
      "age": 23,
      "name": "Connie Jarvis",
      "gender": "female",
      "company": "GEEKNET",
      "email": "conniejarvis@geeknet.com",
      "phone": "+1 (986) 573-2284",
      "address": "654 Sapphire Street, Kansas, Virginia, 2689",
      "friends": [
        {
          "id": 0,
          "name": "Gladys Cleveland"
        },
        {
          "id": 1,
          "name": "Dunn Hays"
        }
      ]
    },
    {
      "id": 16,
      "age": 33,
      "name": "Moreno Salazar",
      "gender": "male",
      "company": "COMTEST",
      "email": "morenosalazar@comtest.com",
      "phone": "+1 (956) 432-2907",
      "address": "129 Vista Place, Vienna, Indiana, 2553",
      "friends": [
        {
          "id": 0,
          "name": "Graciela Sweet"
        },
        {
          "id": 1,
          "name": "Horne Preston"
        }
      ]
    },
    {
      "id": 17,
      "age": 27,
      "name": "Angel Ingram",
      "gender": "female",
      "company": "TELEQUIET",
      "email": "angelingram@telequiet.com",
      "phone": "+1 (968) 436-2895",
      "address": "995 Anna Court, Brenton, Iowa, 9551",
      "friends": [
        {
          "id": 0,
          "name": "Roberts Whitley"
        },
        {
          "id": 1,
          "name": "Lourdes York"
        }
      ]
    },
    {
      "id": 18,
      "age": 37,
      "name": "John Harrell",
      "gender": "male",
      "company": "SARASONIC",
      "email": "greeneharrell@sarasonic.com",
      "phone": "+1 (830) 535-2580",
      "address": "382 Hawthorne Street, Kingstowne, Louisiana, 9414",
      "friends": [
        {
          "id": 0,
          "name": "Trina Noble"
        },
        {
          "id": 1,
          "name": "Chapman Garrett"
        }
      ]
    },
    {
      "id": 19,
      "age": 32,
      "name": "Jerry Hutchinson",
      "gender": "female",
      "company": "OVOLO",
      "email": "jerryhutchinson@ovolo.com",
      "phone": "+1 (945) 411-2623",
      "address": "320 Grace Court, Franklin, Maryland, 1769",
      "friends": [
        {
          "id": 0,
          "name": "Dorthy Wallace"
        },
        {
          "id": 1,
          "name": "Park Rojas"
        }
      ]
    },
    {
      "id": 20,
      "age": 37,
      "name": "Beth Finch",
      "gender": "female",
      "company": "QUILITY",
      "email": "bethfinch@quility.com",
      "phone": "+1 (922) 432-3584",
      "address": "207 Lancaster Avenue, Machias, Indiana, 2165",
      "friends": [
        {
          "id": 0,
          "name": "Bender Serrano"
        },
        {
          "id": 1,
          "name": "Vincent Ayala"
        }
      ]
    },
    {
      "id": 21,
      "age": 25,
      "name": "Stewart Perez",
      "gender": "male",
      "company": "ECRATIC",
      "email": "stewartperez@ecratic.com",
      "phone": "+1 (922) 410-3664",
      "address": "188 Temple Court, Monument, Michigan, 4952",
      "friends": [
        {
          "id": 0,
          "name": "Knight Wade"
        },
        {
          "id": 1,
          "name": "Madelyn Bass"
        }
      ]
    },
    {
      "id": 22,
      "age": 31,
      "name": "Burks Sandoval",
      "gender": "male",
      "company": "VIAGREAT",
      "email": "burkssandoval@viagreat.com",
      "phone": "+1 (832) 478-2925",
      "address": "303 Friel Place, Moscow, Ohio, 8553",
      "friends": [
        {
          "id": 0,
          "name": "Robbins Howe"
        },
        {
          "id": 1,
          "name": "Minnie Simpson"
        }
      ]
    },
    {
      "id": 23,
      "age": 36,
      "name": "Shelley Stevens",
      "gender": "female",
      "company": "NAXDIS",
      "email": "shelleystevens@naxdis.com",
      "phone": "+1 (885) 405-3043",
      "address": "179 Pooles Lane, Washington, Nevada, 6989",
      "friends": [
        {
          "id": 0,
          "name": "Hardy Roberson"
        },
        {
          "id": 1,
          "name": "Sosa Byers"
        }
      ]
    },
    {
      "id": 24,
      "age": 26,
      "name": "Norman Guerrero",
      "gender": "male",
      "company": "ZENTRY",
      "email": "normanguerrero@zentry.com",
      "phone": "+1 (916) 431-3824",
      "address": "389 Montieth Street, Iberia, Wyoming, 3950",
      "friends": [
        {
          "id": 0,
          "name": "Beach Hendrix"
        },
        {
          "id": 1,
          "name": "Bernadine Gilbert"
        }
      ]
    },
    {
      "id": 25,
      "age": 30,
      "name": "Suzette Russo",
      "gender": "female",
      "company": "EXOSWITCH",
      "email": "suzetterusso@exoswitch.com",
      "phone": "+1 (936) 515-3577",
      "address": "183 Berkeley Place, Sussex, Connecticut, 5772",
      "friends": [
        {
          "id": 0,
          "name": "Gamble Rich"
        },
        {
          "id": 1,
          "name": "Sofia Lambert"
        }
      ]
    },
    {
      "id": 26,
      "age": 36,
      "name": "Sheena Frederick",
      "gender": "female",
      "company": "ROCKYARD",
      "email": "sheenafrederick@rockyard.com",
      "phone": "+1 (911) 431-3971",
      "address": "906 Highland Boulevard, Itmann, Vermont, 6278",
      "friends": [
        {
          "id": 0,
          "name": "Shawn Reyes"
        },
        {
          "id": 1,
          "name": "Meyers Robinson"
        }
      ]
    },
    {
      "id": 27,
      "age": 36,
      "name": "Wolf Morales",
      "gender": "male",
      "company": "MANTRO",
      "email": "wolfmorales@mantro.com",
      "phone": "+1 (975) 529-2438",
      "address": "741 Hall Street, Felt, Wisconsin, 4914",
      "friends": [
        {
          "id": 0,
          "name": "Dunlap Mcneil"
        },
        {
          "id": 1,
          "name": "Ferguson Roberts"
        }
      ]
    },
    {
      "id": 28,
      "age": 35,
      "name": "Dyer Horton",
      "gender": "male",
      "company": "SONGLINES",
      "email": "dyerhorton@songlines.com",
      "phone": "+1 (828) 543-3365",
      "address": "406 Seeley Street, Gratton, Delaware, 4534",
      "friends": [
        {
          "id": 0,
          "name": "Rice Macias"
        },
        {
          "id": 1,
          "name": "Alisha Stone"
        }
      ]
    }
  ]
}
Copilot said: ````markdown name=README.md # Contacts React App (CA2) This project

README.md
# Contacts React App (CA2)

This project is a React application that uses JSON-Server to provide a RESTful API for managing contacts. It implements the features required by the CA2 Class Test:

- Client-side routing (React Router)
- List all contacts (GET)

package.json
{
  "name": "contacts-ca2",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
name=db.json
{
  "contacts": [
    {
      "id": 0,
      "age": 38,
      "name": "Juliet Wells",
      "gender": "female",
      "company": "XOGGLE",
      "email": "julietwells@xoggle.com",
      "phone": "+1 (913) 412-3410",
      "address": "522 Livingston Street, Kaka, Georgia, 3604",
      "friends": [
        { "id": 0, "name": "Marianne Bean" },
        { "id": 1, "name": "Spencer Barnes" },
        { "id": 2, "name": "Andy Murphy" }
      ]
    },
    {
      "id": 1,
      "age": 20,
      "name": "Rush Brady",
      "gender": "male",
      "company": "JIMBIES",
      "email": "rushbrady@jimbies.com",
      "phone": "+1 (887) 566-2815",
      "address": "260 Bowne Street, Fowlerville, Oregon, 9079",
      "friends": [
        { "id": 0, "name": "Margie Curry" },
        { "id": 1, "name": "Kline Cummings" }
      ]
    },
    {
      "id": 2,
      "age": 34,
      "name": "Woodard Orr",
      "gender": "male",
      "company": "WAAB",
      "email": "woodardorr@waab.com",
      "phone": "+1 (933) 574-3925",
      "address": "349 Ryder Street, Walker, New Hampshire, 3013",
      "friends": [
        { "id": 0, "name": "Flores Compton" },
        { "id": 1, "name": "Trujillo Dudley" }
      ]
    },
    {
      "id": 3,
      "age": 40,
      "name": "Rosario Snow",
      "gender": "male",
      "company": "INQUALA",
      "email": "rosariosnow@inquala.com",
      "phone": "+1 (968) 503-3531",
      "address": "394 Broome Street, Coventry, Mississippi, 137",
      "friends": [
        { "id": 0, "name": "Kerri Stevenson" },
        { "id": 1, "name": "Virgie Lawson" }
      ]
    },
    {
      "id": 4,
      "age": 25,
      "name": "Maryellen Greene",
      "gender": "female",
      "company": "CUJO",
      "email": "maryellengreene@cujo.com",
      "phone": "+1 (978) 525-3788",
      "address": "335 Georgia Avenue, Greer, Oregon, 5850",
      "friends": [
        { "id": 0, "name": "Brianna Pollard" },
        { "id": 1, "name": "Rivera Sexton" }
      ]
    },
    {
      "id": 5,
      "age": 32,
      "name": "Harrison Pope",
      "gender": "male",
      "company": "EMOLTRA",
      "email": "harrisonpope@emoltra.com",
      "phone": "+1 (829) 480-3962",
      "address": "651 Pierrepont Street, Lavalette, Illinois, 7680",
      "friends": [
        { "id": 0, "name": "Patel Jenkins" },
        { "id": 1, "name": "Savage Klein" }
      ]
    },
    {
      "id": 6,
      "age": 24,
      "name": "Payne Coffey",
      "gender": "male",
      "company": "EXOSTREAM",
      "email": "paynecoffey@exostream.com",
      "phone": "+1 (831) 479-2632",
      "address": "827 Chase Court, Nogal, Pennsylvania, 9380",
      "friends": [
        { "id": 0, "name": "Vicki Avery" },
        { "id": 1, "name": "John Barnes" },
        { "id": 21, "name": "Vickie Schwartz" }
      ]
    },
    {
      "id": 7,
      "age": 34,
      "name": "John Wilkinson",
      "gender": "male",
      "company": "GEOLOGIX",
      "email": "hatfieldwilkinson@geologix.com",
      "phone": "+1 (985) 561-2357",
      "address": "466 Taaffe Place, Thatcher, Virgin Islands, 4000",
      "friends": [
        { "id": 0, "name": "Jessica Hunt" },
        { "id": 1, "name": "Lula Fuentes" }
      ]
    },
    {
      "id": 8,
      "age": 37,
      "name": "Robinson Gallagher",
      "gender": "male",
      "company": "ETERNIS",
      "email": "robinsongallagher@eternis.com",
      "phone": "+1 (971) 517-2100",
      "address": "399 Wythe Place, Nash, Oregon, 9708",
      "friends": [
        { "id": 0, "name": "Miriam Gregory" },
        { "id": 1, "name": "Hutchinson Boone" }
      ]
    },
    {
      "id": 9,
      "age": 35,
      "name": "Patrica Pugh",
      "gender": "female",
      "company": "ISOTRONIC",
      "email": "patricapugh@isotronic.com",
      "phone": "+1 (843) 566-2658",
      "address": "527 Gerald Court, Woodlake, South Carolina, 852",
      "friends": [
        { "id": 0, "name": "Barnes Neal" },
        { "id": 1, "name": "Fred Smitt" },
        { "id": 2, "name": "Gonzales Harper" }
      ]
    },
    {
      "id": 10,
      "age": 28,
      "name": "Antonia Carr",
      "gender": "female",
      "company": "CEPRENE",
      "email": "antoniacarr@ceprene.com",
      "phone": "+1 (978) 415-2087",
      "address": "166 Kimball Street, Welch, Indiana, 6187",
      "friends": [{ "id": 0, "name": "Amber Hood" }]
    },
    {
      "id": 11,
      "age": 39,
      "name": "Frazier Stephens",
      "gender": "male",
      "company": "TERRAGO",
      "email": "frazierstephens@terrago.com",
      "phone": "+1 (863) 481-2671",
      "address": "451 Jackson Court, Kirk, New Mexico, 3558",
      "friends": [
        { "id": 0, "name": "Burnett Maddox" },
        { "id": 1, "name": "Ellen Ryan" }
      ]
    },
    {
      "id": 12,
      "age": 32,
      "name": "Alicia Hahn",
      "gender": "female",
      "company": "STELAECOR",
      "email": "aliciahahn@stelaecor.com",
      "phone": "+1 (981) 457-3922",
      "address": "294 Tompkins Avenue, Shrewsbury, Hawaii, 8714",
      "friends": [
        { "id": 0, "name": "Mcgee Nunez" },
        { "id": 1, "name": "Williamson Bonner" }
      ]
    },
    {
      "id": 13,
      "age": 20,
      "name": "Jana Mcdaniel",
      "gender": "female",
      "company": "ZENTURY",
      "email": "janamcdaniel@zentury.com",
      "phone": "+1 (931) 443-2208",
      "address": "369 Sackett Street, Odessa, Massachusetts, 278",
      "friends": [
        { "id": 0, "name": "Arlene Walters" },
        { "id": 1, "name": "Mooney Nolan" },
        { "id": 2, "name": "Phi Neal" },
        { "id": 3, "name": "Mark Smith" }
      ]
    },
    {
      "id": 14,
      "age": 21,
      "name": "Melva Drake",
      "gender": "female",
      "company": "SLOGANAUT",
      "email": "melvadrake@sloganaut.com",
      "phone": "+1 (804) 427-2383",
      "address": "429 Aitken Place, Hoehne, Utah, 5834",
      "friends": [
        { "id": 0, "name": "Henderson Combs" },
        { "id": 1, "name": "Alfreda Ashley" }
      ]
    },
    {
      "id": 15,
      "age": 23,
      "name": "Connie Jarvis",
      "gender": "female",
      "company": "GEEKNET",
      "email": "conniejarvis@geeknet.com",
      "phone": "+1 (986) 573-2284",
      "address": "654 Sapphire Street, Kansas, Virginia, 2689",
      "friends": [
        { "id": 0, "name": "Gladys Cleveland" },
        { "id": 1, "name": "Dunn Hays" }
      ]
    },
    {
      "id": 16,
      "age": 33,
      "name": "Moreno Salazar",
      "gender": "male",
      "company": "COMTEST",
      "email": "morenosalazar@comtest.com",
      "phone": "+1 (956) 432-2907",
      "address": "129 Vista Place, Vienna, Indiana, 2553",
      "friends": [
        { "id": 0, "name": "Graciela Sweet" },
        { "id": 1, "name": "Horne Preston" }
      ]
    },
    {
      "id": 17,
      "age": 27,
      "name": "Angel Ingram",
      "gender": "female",
      "company": "TELEQUIET",
      "email": "angelingram@telequiet.com",
      "phone": "+1 (968) 436-2895",
      "address": "995 Anna Court, Brenton, Iowa, 9551",
      "friends": [
        { "id": 0, "name": "Roberts Whitley" },
        { "id": 1, "name": "Lourdes York" }
      ]
    },
    {
      "id": 18,
      "age": 37,
      "name": "John Harrell",
      "gender": "male",
      "company": "SARASONIC",
      "email": "greeneharrell@sarasonic.com",
      "phone": "+1 (830) 535-2580",
      "address": "382 Hawthorne Street, Kingstowne, Louisiana, 9414",
      "friends": [
        { "id": 0, "name": "Trina Noble" },
        { "id": 1, "name": "Chapman Garrett" }
      ]
    },
    {
      "id": 19,
      "age": 32,
      "name": "Jerry Hutchinson",
      "gender": "female",
      "company": "OVOLO",
      "email": "jerryhutchinson@ovolo.com",
      "phone": "+1 (945) 411-2623",
      "address": "320 Grace Court, Franklin, Maryland, 1769",
      "friends": [
        { "id": 0, "name": "Dorthy Wallace" },
        { "id": 1, "name": "Park Rojas" }
      ]
    },
    {
      "id": 20,
      "age": 37,
      "name": "Beth Finch",
      "gender": "female",
      "company": "QUILITY",
      "email": "bethfinch@quility.com",
      "phone": "+1 (922) 432-3584",
      "address": "207 Lancaster Avenue, Machias, Indiana, 2165",
      "friends": [
        { "id": 0, "name": "Bender Serrano" },
        { "id": 1, "name": "Vincent Ayala" }
      ]
    },
    {
      "id": 21,
      "age": 25,
      "name": "Stewart Perez",
      "gender": "male",
      "company": "ECRATIC",
      "email": "stewartperez@ecratic.com",
      "phone": "+1 (922) 410-3664",
      "address": "188 Temple Court, Monument, Michigan, 4952",
      "friends": [
        { "id": 0, "name": "Knight Wade" },
        { "id": 1, "name": "Madelyn Bass" }
      ]
    },
    {
      "id": 22,
      "age": 31,
      "name": "Burks Sandoval",
      "gender": "male",
      "company": "VIAGREAT",
      "email": "burkssandoval@viagreat.com",
      "phone": "+1 (832) 478-2925",
      "address": "303 Friel Place, Moscow, Ohio, 8553",
      "friends": [
        { "id": 0, "name": "Robbins Howe" },
        { "id": 1, "name": "Minnie Simpson" }
      ]
    },
    {
      "id": 23,
      "age": 36,
      "name": "Shelley Stevens",
      "gender": "female",
      "company": "NAXDIS",
      "email": "shelleystevens@naxdis.com",
      "phone": "+1 (885) 405-3043",
      "address": "179 Pooles Lane, Washington, Nevada, 6989",
      "friends": [
        { "id": 0, "name": "Hardy Roberson" },
        { "id": 1, "name": "Sosa Byers" }
      ]
    },
    {
      "id": 24,
      "age": 26,
      "name": "Norman Guerrero",
      "gender": "male",
      "company": "ZENTRY",
      "email": "normanguerrero@zentry.com",
      "phone": "+1 (916) 431-3824",
      "address": "389 Montieth Street, Iberia, Wyoming, 3950",
      "friends": [
        { "id": 0, "name": "Beach Hendrix" },
        { "id": 1, "name": "Bernadine Gilbert" }
      ]
    },
    {
      "id": 25,
      "age": 30,
      "name": "Suzette Russo",
      "gender": "female",
      "company": "EXOSWITCH",
      "email": "suzetterusso@exoswitch.com",
      "phone": "+1 (936) 515-3577",
      "address": "183 Berkeley Place, Sussex, Connecticut, 5772",
      "friends": [
        { "id": 0, "name": "Gamble Rich" },
        { "id": 1, "name": "Sofia Lambert" }
      ]
    },
    {
      "id": 26,
      "age": 36,
      "name": "Sheena Frederick",
      "gender": "female",
      "company": "ROCKYARD",
      "email": "sheenafrederick@rockyard.com",
      "phone": "+1 (911) 431-3971",
      "address": "906 Highland Boulevard, Itmann, Vermont, 6278",
      "friends": [
        { "id": 0, "name": "Shawn Reyes" },
        { "id": 1, "name": "Meyers Robinson" }
      ]
    },
    {
      "id": 27,
      "age": 36,
      "name": "Wolf Morales",
      "gender": "male",
      "company": "MANTRO",
      "email": "wolfmorales@mantro.com",
      "phone": "+1 (975) 529-2438",
      "address": "741 Hall Street, Felt, Wisconsin, 4914",
      "friends": [
        { "id": 0, "name": "Dunlap Mcneil" },
        { "id": 1, "name": "Ferguson Roberts" }
      ]
    },
    {
      "id": 28,
      "age": 35,
      "name": "Dyer Horton",
      "gender": "male",
      "company": "SONGLINES",
      "email": "dyerhorton@songlines.com",
      "phone": "+1 (828) 543-3365",
      "address": "406 Seeley Street, Gratton, Delaware, 4534",
      "friends": [
        { "id": 0, "name": "Rice Macias" },
        { "id": 1, "name": "Alisha Stone" }
      ]
    }
  ]
}

src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';


src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import SearchById from './components/SearchById';
import Filters from './components/Filters';

src/styles/App.module.css
.app {
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  padding: 16px;
  background: #f5f7fb;
  min-height: 100vh;

src/components/ContactCard.module.css
.card {
  background: white;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);

src/components/ContactCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContactCard.module.css';

export default function ContactCard({ contact, onDelete }) {
  const navigate = useNavigate();

src/components/ContactList.jsx
import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import styles from './ContactCard.module.css';
import { getAllContacts, deleteContact } from '../api';

export default function ContactList() {

src/components/ContactDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContactById } from '../api';

export default function ContactDetail() {
  const { id } = useParams();

src/components/SearchById.jsx
import React, { useState } from 'react';
import { getContactById } from '../api';
import { useNavigate } from 'react-router-dom';

export default function SearchById() {
  const [id, setId] = useState('');

src/components/Filters.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllContacts } from '../api';
import ContactCard from './ContactCard';

export default function Filters({ filterType }) {

src/api.js
const API_BASE = 'http://localhost:3001';

export async function getAllContacts() {
  try {
    const res = await fetch(`${API_BASE}/contacts`);
    if (!res.ok) throw new Error('Failed to fetch contacts');

src/styles/global.css
body {
  margin: 0;
  padding: 0;
  background: #f5f7fb;
}

Notes on using the app and verifying requirements

Listing all contacts: go to / to see the full list with Name, Age, Company and Friends.
Contact lookup by ID: go to /search, enter an ID (e.g., 10) and press Search; the displayed fields are Name, Age, Gender, Email and Phone. You can click "View full details" to go to contact route.
Sorting: use the "Sort by age" button on the All Contacts page to toggle ascending/descending.
State-based filtering (Indiana): visit /indiana to see contacts whose address includes "Indiana" (IDs in db that match: 10, 16, 20).
Gender-based filtering: click "Female" or "Male" in the navigation or visit /gender/female.
RESTful deletion: the UI Delete button issues a DELETE request to JSON-Server. Delete IDs 10, 11 and 15 using the Delete button to satisfy the deletion requirement.
CSS Modules: ContactCard.module.css and App.module.css are used for UI styling.
If you'd like, I can:

Add a small script to run both the client and json-server concurrently.
Add visual improvements and accessibility touches.
Create a build/production configuration.
You said: create a repo for this
create a repo for this
Copilot said: I'll create a new GitHub repository under
I'll create a new GitHub repository under your account Oisin003 called "contacts-ca2" and push the full project (all files: README, package.json, db.json, src files and

Message interrupted
Copilot was interrupted before it could finish this message.
You said: provide the file structure
provide the file structure
Copilot said: Here's the project file structure: ``` contacts-ca2/ ├── README.md ├── package.json ├──
Here's the project file structure:

Code
contacts-ca2/
├── README.md
├── package.json
├── db.json
└── src/
    ├── index.js
    ├── App.jsx
    ├── api.js
    ├── styles/
    │   ├── global.css
    │   └── App.module.css
    └── components/
        ├── ContactCard.jsx
        ├── ContactCard.module.css
        ├── ContactList.jsx
        ├── ContactDetail.jsx
        ├── SearchById.jsx
        └── Filters.jsx
Ask anything
Workbench


README.md

package.json

src/index.js

src/App.jsx

src/styles/App.module.css

src/components/ContactCard.module.css

src/components/ContactCard.jsx

src/components/ContactList.jsx

src/components/ContactDetail.jsx

src/components/SearchById.jsx

src/components/Filters.jsx

src/api.js

src/styles/global.css
Press Delete to close.

Preview

Code
37 lines · 2 KB

README.md file contents
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
# Contacts React App (CA2)

This project is a React application that uses JSON-Server to provide a RESTful API for managing contacts. It implements the features required by the CA2 Class Test:

- Client-side routing (React Router)
- List all contacts (GET)
- Search contact by ID (GET /contacts/:id) showing Name, Age, Gender, Email, Phone
- Sort contacts by age (ascending / descending)
- Gender-based filtering
- Filter contacts who live in Indiana
- REST deletions (supports deleting contacts; required IDs to be deletable: 10, 11, 15)
- GUI styled with CSS Modules

Quick features overview:
- Route `/` - List all contacts (Name, Age, Company, Friends). Sorting & filtering controls available.
- Route `/search` - Search for a contact by ID and display Name, Age, Gender, Email, Phone.
- Route `/contact/:id` - Contact detail view (same fields as search plus address and friends).
- Route `/indiana` - Lists contacts whose address includes "Indiana".
- Route `/gender/:gender` - List contacts filtered by gender.

Setup and run
1. Install dependencies:
   npm install

2. Start JSON server (serves the API at http://localhost:3001):
   npm run server

   This runs `json-server --watch db.json --port 3001`.

3. In a separate terminal start the React dev server:
   npm start

   The React app runs on http://localhost:3000 and talks to JSON-Server on port 3001.

Notes
- To perform the required deletions, delete contacts with IDs 10, 11 and 15 using the Delete button next to the contact in the list or programmatically (the UI allows deleting any contact).
- The app uses CSS Modules for component-level styles (see .module.css files).
README.md
Project file structure for contacts app · GitHub Copilot