/*
Program:            Mixed Messages
Author:             Practical-Robot
Purpose:            To generate inspirational messages for the masses
Date:               March 18 2025
Notes:              Using basic English sentance structure rules and 'top #n' lists from the internet,
                    This program will build inspirational quotes to help people with their troubles. Or not.
*/

// Standard coordinating conjunctions in English
const coordinatingConjunctions = ['For', 'And', 'Nor', 'But', 'Or', 'Yet', 'So'];

// Standard Coordinating Conjunctions from English
const subCoordinatingConjunctions = ['That', 'After', 'Because', 'Before', 'Even if', 'If', 'Once', 'Rather Than', 'Since', 'Unless', 'Until', 'When', 'Where', 'While'];

// Used Google AI to generate a list of simple subjects... Then made them generic as possible
const simpleSubjectsPeople = ['Person', 'Child', 'Teacher', 'Doctor', 'Nurse', 'Student', 'Parent', 'Sibling', 'Friend', 'Neighbour', 'Dog', 'Cat', 'Bird', 'Fish', 'Horse', 'Cow', 'Pig', 'Chicken', 'Sheep', 'Shark', 'Goat', 'Cheetah', 'Monkey', 'Bear', 'Elephant', 'Robot'];

// Google's list was comprehensive, but not funny enough, so I removed and replaced where necessary
const simpleSubjectsPlaces = ['House', 'Trailer', 'School', 'Hospital', 'Park', 'Store', 'Café', 'Library', 'Pool', 'Grotto', 'Cave', 'Basement', 'Bedroom', 'Shelter', 'Convent', 'Temple', 'Sinkhole'];

// Again... from the Googs.. but I think I'll need to replace many of these words... but I'm lazy and need to write the script. More to come.
const simpleSubjectsThings = ['Table', 'Chair', 'Book', 'Pen', 'Pencil', 'Paper', 'Computer', 'Phone', 'Automobile', 'Aeroplane', 'Locomotive', 'Boat and/or Ship', 'Tree', 'Flower', 'Brick', 'Sky', 'Ocean', 'Sun', 'Moon', 'Star', 'Cloud', 'River', 'Mountain'];

// Everyone loves an Abstract. Hopefully my comedy formula works with these
const simpleSubjectsAbstracts = ['Time', 'Day', 'Week', 'Month', 'Year', 'Decade', 'Hope', 'Love', 'Happiness', 'Sadness', 'Anger', 'Fear', 'Joy', 'Dispair', 'Peace', 'Knowledge', 'Truth', 'Depth', 'Beauty', 'Freedom', 'Justice', 'Power', 'Strength', 'Weakness', 'Change', 'Nothing', 'Everything'];

// The 20 most common English verbs according to Babbel... Given that I generalized all the subjecs, these should suffice without tense
const verbs = ['are', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'come', 'see', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work'];

// Sentances have objects as well as subjects... but I'm lazy as hell... so I'm just going to pull from the Subject Arrays.

// Punctuation is key, However, I ain't getting fancy
const punctuation = [',', '.', '?', '!'];

// We're only going to create two types of sentances: Simple and Compound. A random number generator will give us a boolean response, we will use 0,1 in a 'truthy' context
const simpleSentence = () => Math.floor(Math.random() * 2) ? true : false;

