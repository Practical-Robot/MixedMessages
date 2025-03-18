/*
Program:            Mixed Messages
Author:             Practical-Robot
Purpose:            To generate inspirational messages for the masses
Date:               March 18 2025
Notes:              Using basic English sentance structure rules and 'top #n' lists from the internet,
                    This program will build inspirational quotes to help people with their troubles. Or not.
*/

/* --------------------GLOBAL VARIABLES------------------------- */

// Standard coordinating conjunctions in English
const coordinatingConjunctions = ['For', 'And', 'Nor', 'But', 'Or', 'Yet', 'So'];

// Standard Coordinating Conjunctions from English
const subCoordinatingConjunctions = ['That', 'After', 'Because', 'Before', 'Even if', 'If', 'Once', 'Rather Than', 'Since', 'Unless', 'Until', 'When', 'Where', 'While'];

// Used Google AI to generate a list of simple subjects... Then made them generic as possible
const simpleSubjectsPeople = ['Person', 'Child', 'Teacher', 'Doctor', 'Nurse', 'Student', 'Parent', 'Sibling', 'Friend', 'Neighbour', 'Dog', 'Cat', 'Bird', 'Fish', 'Horse', 'Cow', 'Pig', 'Chicken', 'Sheep', 'Shark', 'Goat', 'Cheetah', 'Monkey', 'Bear', 'Elephant', 'Robot'];

// Google's list was comprehensive, but not funny enough, so I removed and replaced where necessary
const simpleSubjectsPlaces = ['House', 'Trailer', 'School', 'Hospital', 'Park', 'Store', 'Café', 'Library', 'Pool', 'Grotto', 'Cave', 'Basement', 'Bedroom', 'Shelter', 'Convent', 'Temple', 'Sinkhole'];

// Again... from the Googs.. but I think I'll need to replace many of these words... but I'm lazy and need to write the script. More to come.
const simpleSubjectsThings = ['Table', 'Chair', 'Book', 'Pen', 'Pencil', 'Paper', 'Computer', 'Phone', 'Automobile', 'Aeroplane', 'Locomotive', 'Boat', 'Tree', 'Flower', 'Brick', 'Sky', 'Ocean', 'Sun', 'Moon', 'Star', 'Cloud', 'River', 'Mountain'];

// Everyone loves an Abstract. Hopefully my comedy formula works with these
const simpleSubjectsAbstracts = ['Time', 'Day', 'Week', 'Month', 'Year', 'Decade', 'Hope', 'Love', 'Happiness', 'Sadness', 'Anger', 'Fear', 'Joy', 'Dispair', 'Peace', 'Knowledge', 'Truth', 'Depth', 'Beauty', 'Freedom', 'Justice', 'Power', 'Strength', 'Weakness', 'Change', 'Nothing', 'Everything'];

// The 20 most common English verbs according to Babbel... Given that I generalized all the subjecs, Plural
const verbsplur = ['are', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'come', 'see', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'suck'];
//Same verbs - Singular
const verbs = ['is', 'has', 'does', 'says', 'gets', 'makes', 'goes', 'knows', 'takes', 'comes', 'sees', 'thinks', 'looks', 'wants', 'uses', 'finds', 'tells', 'asks', 'works', 'sucks'];

// Lets add some frequency adverbs
const adverbFrequent = ['always', 'usually', 'often', 'rarely', 'never', 'frequently', 'occasionally', 'very', 'sometimes'];

// Lets add some intensity adverbs - Removed option, but kept array for future builds.
//const adverbIntense = ['very', 'just', 'really', 'almost', 'quite', 'extremely', 'kinda', 'sort of'];

//Manner adverbs add some spice
const adverbManner = ['well', 'slowly', 'quickly', 'carefully', 'loudly', 'recklessly', 'quietly', 'joyfully']

// Punctuation is key, However, I ain't getting fancy
const punctuation = ['.', '?', '!'];



/*-----------------Helper Functions: Random Number Generators--------------------*/

// We're only going to create two types of sentances: Simple and Compound. A random number generator will give us a boolean response, we will use 0,1 in a 'truthy' context
const randBool = () => Math.floor(Math.random() * 2) ? true : false;

//Select a random string from an array
const randSelector = (arrayLength) => {return Math.floor(Math.random() * arrayLength)};

//There are 4 arrays of Subjects to make this more fun - Helper function returns which array will be used.

function subjectPicker(){
    const randSubject = Math.floor(Math.random() * 4);

    switch (randSubject){
        case 0:
            return simpleSubjectsPeople;
            break;
        case 1:
            return simpleSubjectsThings;
            break;
        case 2:
            return simpleSubjectsPlaces;
            break;
        case 3:
            return simpleSubjectsAbstracts;
            break;
    }
}

/*------------------- Constructor Functions ------------------*/

// Using basic simple-sentence structure, we use some random number generators for Subjects, verbs, and object - We also add in optional adverbs
//returns a string
function generateSimple(){
    //Create an empty array to contain the sentence
    let sentenceArray = [];

    // Simple sentences begin with a subject - Select a random subject type
    let selectedSubjectArr = subjectPicker();
    
    // Bool decides if the first word is plural
    if (randBool()){
        sentenceArray.push(`${selectedSubjectArr[randSelector(selectedSubjectArr.length)]}s`);

    // Random select whether we place a frequency adverb
        if(randBool()){
            let adverb = adverbFrequent[randSelector(adverbFrequent.length)];
            sentenceArray.push(adverb);
        }
        //Follow that up with a verb
        sentenceArray.push(verbsplur[randSelector(verbsplur.length)]);
    }
    else{
        sentenceArray.push(selectedSubjectArr[randSelector(selectedSubjectArr.length)]);

    // Random select whether we place a frequency adverb
        if(randBool()){
            let adverb = adverbFrequent[randSelector(adverbFrequent.length)];
            sentenceArray.push(adverb);
        }
        // Follow that up with a verb
        sentenceArray.push(verbs[randSelector(verbs.length)]);
    }

    

    //Add an object (from the subject list) Randomize the plural
    if(randBool()){
        // Plural    
        selectedSubjectArr = subjectPicker();
        sentenceArray.push(`${selectedSubjectArr[randSelector(selectedSubjectArr.length)].toLowerCase()}s`);
        // with potential for a Manner adverb
        if(randBool()){
            let adverb = adverbManner[randSelector(adverbManner.length)];
            sentenceArray.push(adverb);
        }
    }
    else{
        // singular
        selectedSubjectArr = subjectPicker();
        sentenceArray.push(selectedSubjectArr[randSelector(selectedSubjectArr.length)].toLowerCase());
        // with potential for a Manner adverb
        if(randBool()){
            let adverb = adverbManner[randSelector(adverbManner.length)];
            sentenceArray.push(adverb);
        }
    }

    // finally, add some punctuation

    return sentenceArray.join(' ')  + punctuation[randSelector(punctuation.length)];

}

//log it!
console.log(generateSimple());