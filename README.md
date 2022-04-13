# wiki-walk
A word cloud game

# Notes
word clouds for wikipedia pages: all links on a page, weighted by the number of times the link text appears on the page.
Click on a word in the cloud and it takes you to the word cloud for that article.
Game: given a target word and a click limit, user tries to reach the article within the click limit.
Path visualization for all users victories.
Path cost inverse of the word rank. Higher rank indicates stronger realtionship between the words, lower rank is a harder link.
Breadcrumb trail of words selected. Hard mode counts up when you go back.

## Two path approaches
1. Randomly traverse links until some arbitrary destination is found. Give the user the destination as the starting and the count we took.
2. Given randomly selected start and destination articles, the code finds the shortest path between the two and give that count as the challenge.

Word struct = {
  name: string,
  count: number,
  link: url
}

## possible DB

word_cloud_table
ID,
ARTICLE

word_table
ID,
NAME,
COUNT,
LINK,
WORD_CLOUD_ID

word_path_table
USER_ID,
COUNT,
WORDS_ARRAY,
DATE
