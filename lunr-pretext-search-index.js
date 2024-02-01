var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  WorldClass   copyright  "
},
{
  "id": "intro-chapter",
  "level": "1",
  "url": "intro-chapter.html",
  "type": "Chapter",
  "number": "1",
  "title": "What is Go?",
  "body": " What is Go?   Go is the oldest game in the world, with evidence of it being played for thousands of years in China. The game is called Go (or Igo) in Japan. It is called Weichi in China. It is called Baduk in Korea. The game only reached the western world in the 1800s. Go is a game of pure strategy.    "
},
{
  "id": "sec-rules-of-the-game",
  "level": "1",
  "url": "sec-rules-of-the-game.html",
  "type": "Section",
  "number": "2.1",
  "title": "Rules of the Game of Go",
  "body": " Rules of the Game of Go  There are very few rules in the game of go.   Rule 1: One player has white stones and the other player has black stones. To begin black places one stone on any intersection on a grid. Players then alternate playing one stone each on any intersection of the grid. The grid is usually 19 19, but the game can be played on 9 9 or 13 13 boards as well.  Rule 2: Surround your opponent's stones to capture them. Captured stones are removed from the board and kept by the capturing player. Details on capturing are in the next section.  Rule 3: The player whose stones surround the most territory in the end wins the game. Details on starting the game (handicaps) and ending the game (counting points) is in section...  Rule 4: Placing a stone that results in self-capture is not allowed. See the next section.  Rule 5: Repetition of an identical board position is not allowed. This will be explained further in section...   "
},
{
  "id": "sec-capturing-stones",
  "level": "1",
  "url": "sec-capturing-stones.html",
  "type": "Section",
  "number": "2.2",
  "title": "Capturing Stones",
  "body": " Capturing Stones  Consider this lone stone in the middle of the board.   Life and Death Example   Example Go board.     "
},
{
  "id": "sec-capturing-stones-3",
  "level": "2",
  "url": "sec-capturing-stones.html#sec-capturing-stones-3",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Life and Death Example   Example Go board.    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
