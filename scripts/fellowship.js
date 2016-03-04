console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


function makeMiddleEarth() {
  // create a section tag with an id of `middle-earth`
  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land
  // append `middle-earth` to your document `body`
  var sectionMiddle = '<section id="middle-earth"></section>'
  $('body').append(sectionMiddle)
  lands.forEach(function(land) {
    $('#middle-earth').append('<article><h1>' + land + '</h1></article>')
  });
};

makeMiddleEarth();

function makeHobbits() {
  // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`
  $('article:first-child').append('<ul></ul>');
  hobbits.forEach(function(hobbit) {
    $('ul').append('<li class="hobbit">' + hobbit + '</li>');
  });
};

makeHobbits();

function keepItSecretKeepItSafe() {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var divTheRing = '<div id="the-ring"></div>';
   $('.hobbit:first-child').append(divTheRing);
   $('#the-ring').addClass('magic-imbued-jewelry');
};

keepItSecretKeepItSafe();

function makeBuddies() {
    // create an `aside` tag
    // attach an `unordered list` of the `'buddies'` in the aside
    // insert your aside as a child element of `rivendell`
    var asideTag = '<aside><ul></ul></aside>';
    $('article:nth-child(2)').append(asideTag);
    buddies.forEach(function(buddy) {
       $('aside ul').append('<li>'+buddy+'</li>');
    });
};

makeBuddies();

function beautifulStranger() {
  // change the `'Strider'` text to `'Aragorn'`
  $('aside ul li').eq(3).html('Aragon');
};

beautifulStranger();

function leaveTheShire() {
  // assemble the `hobbits` and move them to `rivendell`
  $('aside ul').append($('article ul li'));
}
leaveTheShire();

function forgeTheFellowShip() {
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  $('aside').append('<div id="the-fellowship"></div>');
  $('#the-fellowship').append($('aside ul'));
  $('aside ul li').each(function(names) {
    alert($(this).text());
  });
}
forgeTheFellowShip();

function theBalrog() {
  // assemble the `hobbits` and move them to `rivendell`
  $('aside ul li').eq(4).html('Gandalf the White');
  $('aside ul li').eq(4).css({'backgroundColor':'white',
                              'border':'3px solid grey'});
}

theBalrog();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  alert('The horn of gondor has been blown');
  $('aside ul li').eq(8).remove();
};

hornOfGondor();

function itsDangerousToGoAlone() {
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
  $('article').eq(2).append($('aside ul li').eq(0));
  $('article').eq(2).append($('aside ul li').eq(0));
  $('article').eq(2).append('<div id="mount-doom"></div>');
}

itsDangerousToGoAlone();

function weWantsIt() {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $('article').eq(2).append('<div id="gollum"></div>');
  $('#gollum').append($('#the-ring'));
  $('#mount-doom').append($('#gollum'));
};

weWantsIt();

function thereAndBackAgain() {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   $('article').eq(0).append($('.hobbit');
}

thereAndBackAgain();


















