/*
To find out which books you have read and which books you haven't read

1) ARRAY OF OBJECTS
        OBJECT = BOOK
        BOOK = TITLE(STRING), AUTHOR(STRING), BEEN-READ(BOOLEAN)

BOOKS = [
    {
    TITLE(STRING)}, 
     AUTHOR(STRING)},
     BEEN-READ(BOOLEAN)
    },
    {
    TITLE(STRING)}, 
     AUTHOR(STRING)},
     BEEN-READ(BOOLEAN)
    }
]

let books = [
    {
     title:(STRING)}, 
     author:(STRING)},
     beenRead:(BOOLEAN)
    },
    {
     title:(STRING)}, 
     author:(STRING)},
     beenRead:(BOOLEAN)
    }
]

2. Go over BOOKS
    FOR each BOOK show TITLE and AUTHOR
        PRINT TITLE and AUTHOUR

SELECT the ARRAY of OBJECTS
    LOOK at each BOOK(OBJECT)
        PRINT out TITLE and AUTHOR

 BOOKS 
    LOOK at each BOOK(OBJECT)
        PRINT out TITLE and AUTHOR   

FOR LOOP:
    START = 0;
    CONDITION = START < BOOKS.length
    INCREMENT START = 1
PRINT out TITLE and AUTHOR
STEP 3 -------------------------------------------------
    BOOKS[START].TITLE BOOKS[START].AUTHOR



3. Depending on whether the BOOK has BEEN read or NOT
 FOR LOOP: from step 2 

    IF BEEN-READ (BOOLEAN)
        THEN
            PRINT out TITLE and AUTHOUR
                'You have already read TITLE and AUTHOR
    ELSE
        PRINT out TITLE and AUTHOUR
             'You have not read TITLE and AUTHOR

    IF(BEEN-READ (BOOLEAN)) {
         'You have already read TITLE and AUTHOR
    } ELSE{
         'You have not read TITLE and AUTHOR
    }


    FOR LOOP:
    START = 0;
    CONDITION = START < BOOKS.length
    INCREMENT START = 1
PRINT out TITLE and AUTHOR
    IF BEEN-READ (BOOLEAN)
        THEN
            PRINT out TITLE and AUTHOUR
                'You have already read  BOOKS[START].TITLE and  BOOKS[START].AUTHOR
    ELSE
        PRINT out TITLE and AUTHOUR
             'You have not read TITLE and AUTHOR


    for (let start = o; star < book.length; start++) {
        if (books[start].beenRead) {
             'You have already read  ${BOOKS[START].TITLE}and  ${BOOKS[START].AUTHOR}
        } ELSE {

        } 'You have not read  ${BOOKS[START].TITLE}and  ${BOOKS[START].AUTHOR
    }

    */

    let books = [
        {
          title: 'book 1',
          author: ' author',
          beenRead: true
        },
        {
          title: 'book 1',
          author: ' author',
          beenRead: false
        }
       ]
       
       for (let start = o; star < book.length; start++) {
           if (books[start].beenRead) {
               console.log(`You have already read ${books[start].title}by ${books[start].author}`);
           } else {
               console.log(`You have not read ${books[start].title} by ${books[start].author}`);
           }
       }
       
       
       /* 
       RECIPIE
       
       OBJECT 
           recipieTitle = string 
           servings = number 
           ingridents = array of strings 
           directions = array of strings 
        
           let favourite recipie = { 
               recipieTitle: 'Chicken Burger' ,
               servings: 5 ; 
               ingredents: [item1 , item 2, item3],
               directions:  [step1, step 2, step 3]
           }
       
           
           let favourite recipie = { 
               recipieTitle: 'Chocolate cake' ,
               servings: 5 ; 
               ingredients: [
                   '225g/8oz unsalted butter, softened, plus extra for greasing' , 
                   '225g/8oz caster sugar, plus extra for sprinkling' , 
                   '4 free-range eggs'
               ],
               directions:  [step1, step 2, step 3]
           }
       
       
       
       list recipie 
       console.log(faveouriteRecipie);
       
       loop over ingridients
       
       let ingridients = favouriteRecipie.ingredients;
       
       FOR LOOP
           start = 0;
           condition = start < ingredients.length
           increment = start +1
          PRINT each ingredients 
       
          for( let start=0; start< ingredients.length; start++){
              cosnole.log(ingredients[start]);
          }
       
       */
           
       let favouriteRecipie = { 
           recipieTitle: 'Chocolate cake' ,
           servings: 5 ,
           ingredients: [
               '225g/8oz unsalted butter, softened, plus extra for greasing' , 
               '225g/8oz caster sugar, plus extra for sprinkling' , 
               '4 free-range eggs'
           ],
           directions:  [step1, step2, step3]
       }
       
       let ingridients = favouriteRecipie.ingredients;
       
       for( let start=0; start< ingredients.length; start++) {
           cosnole.log(ingredients[start]);
       }
       
           