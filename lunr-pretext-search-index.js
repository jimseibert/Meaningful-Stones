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
  "body": " What is Go?   Go is the oldest game in the world, with evidence of it being played for thousands of years in China. The game is called Go (or Igo) in Japan. It is called Weichi in China. It is called Baduk in Korea. The game only reached the western world in the 1800s. Go is a game of pure strategy.    Life and Death Example   Example Go board.      "
},
{
  "id": "intro-chapter-3",
  "level": "2",
  "url": "intro-chapter.html#intro-chapter-3",
  "type": "Figure",
  "number": "1.0.1",
  "title": "",
  "body": " Life and Death Example   Example Go board.    "
},
{
  "id": "sec-rules-of-the-game",
  "level": "1",
  "url": "sec-rules-of-the-game.html",
  "type": "Section",
  "number": "2.1",
  "title": "Rules of the Game of Go",
  "body": " Rules of the Game of Go  There are very few rules in the game of go.   Rule 1: One player has white stones and the other player has black stones. To begin black places one stone on any intersection on a grid. Players then alternate playing one stone each on any intersection of the grid. The grid is usually 19 19, but the game can be played on 9 9 or 13 13 boards as well.  Rule 2: Surround your opponent's stones to capture them. Captured stones are removed from the board and kept by the capturing player. In order to capture a stone or connected group of stones, you must occupy all of their horizontal and vertical adjacent intersections (liberties). Details below.  Rule 3: The player with the most territory in the end wins the game. Each player counts the intersections that they surround and adds the number of captured stones they have. Since black has the advantage of playing first, white gets an additional points (called kome ). The player with the higher total wins.  Rule 4: Placing a stone that results in that stone (or group of stones) being completed surrounded (without capturing opponent's stones) would cause that stone (or group of stones) to be captured and removed from the board. This kind of \"self-capture\" is not allowed, and would never be advantageous anyway!  Rule 5: Repetition of an identical board position is not allowed. If your opponent takes one of your stones and leaves you in a position to retake the stone they just played, you may not immediately take their stone since it would result in an identical board position. (If allowed stubborn players could infinitely repeat capturing each other's stones.) This is called a ko . After playing a move somewhere else on the board (changing the overall board position) you can return and capture your opponent's stone, if that move is still available.   "
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
