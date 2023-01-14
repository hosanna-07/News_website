/** 
 * @jest-environment jsdom 
 */
import { sort, search, newsList, MySort } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
const textToSearch = "film";
const result = newsList.filter(word=> word.toLowerCase().includes(textToSearch.toLowerCase()));
expect(result).toHaveLength(1);
});

//testing for sort function
test("News is sorted by ascending, ignoring non alphanumeric", () => {
const type = "ascending";
const SortResult = sort(type);
expect(SortResult).toEqual(
  [
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?",
  ]
);
});