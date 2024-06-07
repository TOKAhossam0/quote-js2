var arrayQuote = [
    {'author': 'Steve Martin', 
    'quote': 'A day without sunshine is like, you know, night.'
   },
    {'author': 'Epictetus', 
     'quote': 'Its not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Ralph Waldo Emerson', 
     'quote': 'For every minute you are angry you lose sixty seconds of happiness.'
    },
    {'author': 'Mark Twain', 
     'quote': 'Never put off till tomorrow what may be done day after tomorrow just as well.'
    },
    {'author': 'Jim Rohn', 
    'quote': 'Beware of what you become in pursuit of what you want.'
   },
];
var TextQuote = document.getElementById("quote");
var authorQuote = document.getElementById("author");
var previous;

function generate(){
   var random = generateNumber();
   while (random === previous){
    var random = generateNumber();
   }
  
    display(random);
    previous = random;
}

function generateNumber(){
 var random = Number.parseInt(Math.random() * arrayQuote.length );
 return random;
}

function display(x){
    TextQuote.innerHTML = arrayQuote[x].quote;
    authorQuote.innerHTML = arrayQuote[x].author;
}

