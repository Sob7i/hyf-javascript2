
// - 1-2 -


let booksTitels = [" Zuleika_ Dobson",

    " The_Good_Soldier",

    " The_Thirty_Nine_Steps ",

    " The_Rainbow",

    " of_Human_Bondage",

    " The_Age_of_Innocence ",

    " Ulysses",

    " Babbitt",

    " A_Passage_to_India",

    " Gentlemen_Prefer_Blondes "];

    console.log(booksTitels);


// - 3 -


    function bookTit() {

        let bookT1 = document.createElement("ul");
    
        for (i = 0; i < bookTitles.length; i++) {
    
            let bookT2 = document.createElement("li");
    
            bookT1.appendChild(bookT2);

            bookT2.innerHTML = booksTitels[i];
    
    
        }
    
    
    }
    
    console.log(bookTit());



// - 4 -


let bookDet = {

    "Zuleika_ Dobson": {

        "title": "Zuleika_ Dobson",

        "language": "English",

        "author": "Max_Beerbohm"

    },

    " The_Good_Soldier": {

        "title": " The_Good_Soldier",

        "language": "English",

        "author": "Madox_Ford "

    },

    "The_Thirty_Nine_Steps": {

        "title": "The_Thirty_Nine_Steps",

        "language": "English",

        "author": " John_Buchan"

    },

    "The_Rainbow": {

        "title": "The_Rainbow",

        "language": "English",

        "author": "DH_Lawrence "

    },

    "of_Human_Bondage": {

        "title": "of_Human_Bondage",

        "language": "English",

        "author": "W_Somerset_Maugham "

    },

    "The_Age_of_Innocence": {

        "title": "The_Age_of_Innocence",

        "language": "English",

        "author": "Edith_Wharton"

    },

    "Ulysses": {

        "title": "Ulysses",

        "language": "English",

        "author": " James_Joyce"

    },

    " Babbitt": {

        "title": " Babbitt",

        "language": "English",

        "author": "Sinclair_Lewis "

    },

    " A_Passage_to_India": {

        "title": " A_Passage_to_India",

        "language": "English",

        "author":  "EM_Forster"

    },

    "Gentlemen_Prefer_Blondes": {

        "title": "Gentlemen_Prefer_Blondes",

        "language": "English",

        "author": "Anita_Loos"

    }



};

// - 5-6 -



function  bookTit(){

    let booksInfo = document.createElement("ul");

    document.body.appendChild(booksInfo);

    for (let bookId in bookDet ) {

        let bookT2 = document.createElement("li");

        bookT2.setAttribute("id",bookId);

        booksInfo.appendChild(bookT2);

        let boTi = document.createElement("h2");

        bookT2.appendChild(boTi);

        boTi.innerHTML = bookDet[bookId].Title ;

        let boLa = document.createElement("p");

        bookT2.appendChild(boLa);

        boLa.innerHTML = bookDet[bookId].Language;

        let boAu = document.createElement("p");

        bookT2.appendChild(boAu);

        boAu.innerHTML = bookDet[bookId].Author;

        };

}

console.log( bookTit());

