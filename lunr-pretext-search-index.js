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
  "body": " What is Go?   Go is a game.  Go is the oldest game in the world, with evidence of it being played for thousands of years in China, where it is called Weichi - the surrounding game. The game reached Korea in (about) the 5th century CE, where it is called Baduk. The game reached Japan in (about) the 7th century, where it is called Go (or Igo). The game only reached the western world in the 19th century. From its earliest incarnations, Go was considered a worthy activity for aristocrats and scholars.  Go is a game of complete information, and the games are decided by the local tactics and global strategies of the players.    "
},
{
  "id": "sec-rules-of-the-game",
  "level": "1",
  "url": "sec-rules-of-the-game.html",
  "type": "Section",
  "number": "2.1",
  "title": "Rules of the Game of Go",
  "body": " Rules of the Game of Go  There are very few rules in the game of go.  Rule 1: One player has white stones and the other player has black stones. To begin black places one stone on any intersection on a grid. Players then alternate playing one stone each on any intersection of the grid. The grid is usually 19 19, but the game can be played on boards of other sizes. Boards of 9 9 or 13 13 are also common for beginners.  Rule 2: Surround your opponent's stones to capture them. Captured stones are removed from the board and kept by the capturing player.  Rule 3: The player with the most territory plus captures wins the game. The game ends when both players decide there are no more moves remaining that will increase their territory or reduce their opponent's territory, capture opponent's stones or protect their own stones from capture. Territory is then counted as the number of open intersections surrounded by one player's stones.  Rule 4: Placing a stone that results in self-capture is not allowed.  Rule 5: Repetition of an identical board position is not allowed (the ko rule).  The video below introduces these rules in more detail. Watch the video and work through the examples to test your understanding.  Michael Redmond The 5 Rules of Go      Goups of stones   Recall that stones that are next to each other along horizontal or vertical lines (but NOT diagonally) are connected and form a single group . In the following figure, how many black groups are there? How many white groups?   Three black groups and two white groups.        There are three black groups (one group marked with triangles, one marked with squares, and one marked with circles) and two white groups (one marked with crosses and the other with unmarked stones).   Three black groups and two white groups, with the groups marked.         Counting liberties   Remember that spaces next to a group of stones (along horizontal or vertical lines) are called the liberties of the group. There are two groups in the figure below. How many liberties does each have?  One black group and one white group of stones.       The black group has seven liberties, and the white group has ten.    Here the liberties are marked.  One black group and one white group of stones, each with their liberties marked.        Exercises   How many groups are depicted in this board? How many liberties does each group have? How many unoccupied liberties does each group have?  Two black groups and three white groups.      Remember that diagonal stones are NOT connected!   There are two black groups and three white groups, numbered below.  Two black groups and three white groups, numbered.     Group 1 has 3 stones, 7 total liberties, and 5 unoccupied liberties.  Group 2 has 5 stones, 10 total liberties, and 3 unoccupied liberties.  Group 3 has 2 stones, 6 total liberties, and 3 unoccupied liberties.  Group 4 has 3 stones, 8 total liberties, and 4 unoccupied liberties.  Group 5 has 4 stones, 9 total liberties, and 3 unoccupied liberties.      "
},
{
  "id": "sec-rules-of-the-game-2-2",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-2-2",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Michael Redmond The 5 Rules of Go   "
},
{
  "id": "sec-rules-of-the-game-3",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-3",
  "type": "Example",
  "number": "2.1.2",
  "title": "Goups of stones.",
  "body": " Goups of stones   Recall that stones that are next to each other along horizontal or vertical lines (but NOT diagonally) are connected and form a single group . In the following figure, how many black groups are there? How many white groups?   Three black groups and two white groups.        There are three black groups (one group marked with triangles, one marked with squares, and one marked with circles) and two white groups (one marked with crosses and the other with unmarked stones).   Three black groups and two white groups, with the groups marked.       "
},
{
  "id": "sec-rules-of-the-game-4",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-4",
  "type": "Example",
  "number": "2.1.5",
  "title": "Counting liberties.",
  "body": " Counting liberties   Remember that spaces next to a group of stones (along horizontal or vertical lines) are called the liberties of the group. There are two groups in the figure below. How many liberties does each have?  One black group and one white group of stones.       The black group has seven liberties, and the white group has ten.    Here the liberties are marked.  One black group and one white group of stones, each with their liberties marked.      "
},
{
  "id": "exercises-rules-2",
  "level": "2",
  "url": "sec-rules-of-the-game.html#exercises-rules-2",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " How many groups are depicted in this board? How many liberties does each group have? How many unoccupied liberties does each group have?  Two black groups and three white groups.      Remember that diagonal stones are NOT connected!   There are two black groups and three white groups, numbered below.  Two black groups and three white groups, numbered.     Group 1 has 3 stones, 7 total liberties, and 5 unoccupied liberties.  Group 2 has 5 stones, 10 total liberties, and 3 unoccupied liberties.  Group 3 has 2 stones, 6 total liberties, and 3 unoccupied liberties.  Group 4 has 3 stones, 8 total liberties, and 4 unoccupied liberties.  Group 5 has 4 stones, 9 total liberties, and 3 unoccupied liberties.    "
},
{
  "id": "sec-capturing-stones",
  "level": "1",
  "url": "sec-capturing-stones.html",
  "type": "Section",
  "number": "2.2",
  "title": "Capturing Stones",
  "body": " Capturing Stones  Consider this lone stone in the middle of the board.   Single black stone in the middle of the board.    There are four points adjacent to this stone, following lines horizontally or vertically. These are called the liberties of the stone. If white manages to occupy all of this stone's liberties, then white will capture the stone and take it off the board.   Single black stone, liberties marked.    On the edge of the board or in the corner stones have fewer liberties.   Black stones on an edge and on a corner, liberties marked.    When stones of the same color are on adjacent intersections (horizontally or vertically, not diagonally ) we say they are connected. A connected group of stones shares their liberties. For example, in the group of two stones in the middle of the board share six liberties, and the group of two stones along the edge share four.   Two adjacent stones, edge and middle, liberties marked.       Two adjacent stones, edge and middle, liberties marked.    Can I reference ?  Nick Sibicky Pro Review Ke Jie     "
},
{
  "id": "lone-stone",
  "level": "2",
  "url": "sec-capturing-stones.html#lone-stone",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "  Single black stone in the middle of the board.    "
},
{
  "id": "lone-stone-liberties",
  "level": "2",
  "url": "sec-capturing-stones.html#lone-stone-liberties",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": "  Single black stone, liberties marked.    "
},
{
  "id": "edge-and-corner-liberties",
  "level": "2",
  "url": "sec-capturing-stones.html#edge-and-corner-liberties",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": "  Black stones on an edge and on a corner, liberties marked.    "
},
{
  "id": "group-liberties",
  "level": "2",
  "url": "sec-capturing-stones.html#group-liberties",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": "  Two adjacent stones, edge and middle, liberties marked.    "
},
{
  "id": "big-group-liberties",
  "level": "2",
  "url": "sec-capturing-stones.html#big-group-liberties",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": "  Two adjacent stones, edge and middle, liberties marked.    "
},
{
  "id": "sec-capturing-stones-2-10",
  "level": "2",
  "url": "sec-capturing-stones.html#sec-capturing-stones-2-10",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " Nick Sibicky Pro Review Ke Jie   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
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
