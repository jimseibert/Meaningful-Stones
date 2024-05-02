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
  "id": "intro-chapter-3",
  "level": "1",
  "url": "intro-chapter-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction  Go is the oldest game in the world, with evidence of it being played for thousands of years in China.  In China the game is called Weichi - the surrounding game. The game reached Korea in (about) the 5th century CE, where it is called Baduk. The game reached Japan in (about) the 7th century, where it is called Go (or Igo). The game only reached the western world in the 19th century.  Go is a game of complete information. The games are decided by the local tactics and global strategies of the players. There is no randomness.  From its earliest incarnations, Go was considered a worthy activity for aristocrats, scholars, and military leaders.  Go is a simple game with few rules.  Go is a complex game with more possible outcomes than there are atoms in the known universe!  "
},
{
  "id": "sec-rules-of-the-game",
  "level": "1",
  "url": "sec-rules-of-the-game.html",
  "type": "Section",
  "number": "2.1",
  "title": "Rules of the Game of Go",
  "body": " Rules of the Game of Go  There are very few rules in the game of go.  Rule 1: One player has white stones and the other player has black stones. To begin black places one stone on any intersection on a grid. Players then alternate playing one stone each on any intersection of the grid. The grid is usually 19 19, but the game can be played on boards of other sizes. Boards of 9 9 or 13 13 are common for beginners.  Rule 2: Surround your opponent's stones to capture them. Captured stones are removed from the board and kept by the capturing player.  Rule 3: The player with the most territory plus captures wins the game. The game ends when both players decide there are no more moves remaining that will increase their territory or reduce their opponent's territory, capture opponent's stones or protect their own stones from capture. Territory is then counted as the number of open intersections surrounded by one player's stones.  Rule 4: Placing a stone that results in self-capture is not allowed.  Rule 5: Repetition of an identical board position is not allowed (the ko rule).  The video below introduces these rules in more detail. Watch the video and work through the examples to test your understanding.   Michael Redmond The 5 Rules of Go     Goups of stones   Recall that stones that are next to each other along horizontal or vertical lines (but NOT diagonally) are connected and form a single group . In the following figure, how many black groups are there? How many white groups?   Black B1, B2, C3, C4, D5, D6; White C2, D2, D3, D4, E5, E6.      There are three black groups (one group marked with triangles, one marked with squares, and one marked with circles) and two white groups (one marked with crosses and the other with unmarked stones).   Black triangle B1, B1; Black square C3, C4; Black circle D5, D6; White cross C2, D2, D3, D4; White unmarked E5, E6.       Counting liberties  liberties   Remember that spaces next to a group of stones (along horizontal or vertical lines) are called the liberties of the group. There are two groups in the figure below. How many liberties does each have?   Black B1, B2, C1, C2, D2; White C5, D5, E5, E6, F5.      The black group has seven liberties, and the white group has ten.    Here the liberties are marked.   Black B1, B2, C1, C2, D2; White C5, D5, E5, E6, F5. Black liberties marked with x's at A1, A2, B3, C3, D3, E2, and D1. White liberties marked with y's at C4, D4, E4, F4, G5, F6, E7, D6, C6, and B5.       Locations on the Board   In order to talk about the location of stones on the board, it is helpful to have a notation for the intersections. To do this we number the rows from bottom to top, and we use letters (starting with A and skipping I) across the bottom.   A 19 by 19 board with rows and columns labeled.    The nine small dots on the board are called star points . star points They are simply there as reference points. We reference intersections by listing the letter first followed by the number. For example, the white stone is at the D8 point. The black stone is at the M17 point. The center star point, at K10, is sometimes referred to by its Japanese name tengen . tengen The corner star points are called 4-4 points (four lines from the two nearest sides), but if we want to name a specific 4-4 point we can use the label D4, D16, Q4, or Q16.     Legal and Illegal Moves   Consider white's move in this corner situation. White can capture the black stone in the corner with a move at T2.   Black R1, R2, S3, T1; White S1, S2    The result is   Black R1, R2, S3; White S1, S2, T2    Now black cannot play in the corner at T1, as that would be an illegal self-capture. Instead black plays at T3.   Black R1, R2, S3, T3; White S1, S2, T2    Now white cannot play at T1 as that would result in the self-capture of the four white stones. Let's say white plays at R3.   Black R1, R2, S3, T3; White S1, S2, T2, R3    Can black now play in the corner at T1? Yes! Enemy captures happen before self-captures. If black was not capturing stones, the move would be illegal, but since black is capturing stones, it is a legal move.   Black R1, R2, S3, T3, T1; White R3       Counting the Score   Here is an example of a game that has finished on a 7 7 board.   Black D1, E1, G1, E2, G2, F3, D3, D4, E4, F4, G4, D5, C4, A5, B5, D6, D7; White A1, C1, A2, C2, D2, B3, C3, A4, B4, E5, F5, G5, E6, G6, E7, F7.    Why is the game completed? Neither side has any meaningful moves remaining. (Meaningful moves either increase your territory or reduce your opponent's territory, threaten to capture stones or protect your stones from being captured.) You might ask, \"Why doesn't black play at B1?\" Well, white will immediately play at B2, capturing the black stone. The end result is that white's territory is reduced by one since they placed an extra stone inside their own territory, but they increase their captures by one, resulting in no change to their overal score (territory plus captures). In general, there is no benefit to placing stones in your opponent's territory unless you have an opportunity to capture some stones.  Suppose that white has captured 4 black stones and black has captured 3 white stones. What is the final score of the game?    Black has 14 points (11 points of territory and 3 captures), while white has 9 points (five points of territory and four captures). Black wins by five points.    In online games, the computer will calculate the score for you, of course. For in-person games, counting the score by hand is done by each player filling their opponents' territory with their captures and then counting the remaining territory. In this example, using captured stones to fill territory might look like the following.   A completed 7x7 game, with territory filled by captures.    After the captures have been placed, black now has 7 points of territory and white has two. The final scores have changed but the difference is the same. Black still wins by five.     The Ko Rule and Ko Fights    ko  ko fight  ko threat Suppose that white has just captured a black stone by placing the marked stone below.   Black C2, C3, D2, E3; White C4, E4, D5, D3.    Black cannot immediately recapture with a move at D4 (the star point) because of the ko rule.  Black must play somewhere else on the board. Suppose black plays at F3, extending their weak stone. White now has a choice. White can play elsewhere on the board, or they can play at D4 ending the \"ko fight.\"   Same as previous with Black F3 and White D4.    Here white has ended the ko. White is left with an inefficient clump of stones, but they have lots of liberties and are not in immediate danger.  Here's a more complicated example of a ko. As before, white has just taken the stone at D4 to start the ko. This time black has a better move, the marked stone at G3. This kind of move is called a \"ko threat.\" It threatens to take something more valuable than the ko, forcing your opponent to respond away from the ko and allowing you to retake the ko.   Black C2, C3, D2, E3, F1, F2, F3, G1, J2, K1, K2, G3; White C4, E4, D3, D5, G2, H1, H2, J1, G4, H4.    In this case black is threatening the four white stones. White has to choose between saving the four white stones and ending the ko. If white saves the four stones, then black can re-take the ko with a stone at D4.   Same as previous with White H3 added, and Black captures at D4.    Now it's white's turn to look for a ko threat somewhere else on the board. If they can force black to respond elsewhere, then white can re-take the ko. If they can't find a ko threat, then black can play at D3 ending the ko. This process of taking turns looking for ko threats and retaking the ko is called a ko fight. It is a natural consequence of the ko rule.     Exercises   How many groups are depicted in this board? How many liberties does each group have? How many unoccupied liberties does each group have?   Black J8, J9, J10, K9, L9, K11, L11, M11; White K10, L10, M10, M9, J11, H11, H10, K8, L8.     Remember that diagonal stones are NOT connected!   There are two black groups and three white groups, numbered below.   Two black groups and three white groups, numbered.      Group 1 has 3 stones, 7 total liberties, and 5 unoccupied liberties.  Group 2 has 5 stones, 10 total liberties, and 3 unoccupied liberties.  Group 3 has 2 stones, 6 total liberties, and 3 unoccupied liberties.  Group 4 has 3 stones, 8 total liberties, and 4 unoccupied liberties.  Group 5 has 4 stones, 9 total liberties, and 3 unoccupied liberties.      "
},
{
  "id": "sec-rules-of-the-game-3",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-3",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Michael Redmond The 5 Rules of Go   "
},
{
  "id": "sec-rules-of-the-game-4",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "Goups of stones.",
  "body": " Goups of stones   Recall that stones that are next to each other along horizontal or vertical lines (but NOT diagonally) are connected and form a single group . In the following figure, how many black groups are there? How many white groups?   Black B1, B2, C3, C4, D5, D6; White C2, D2, D3, D4, E5, E6.      There are three black groups (one group marked with triangles, one marked with squares, and one marked with circles) and two white groups (one marked with crosses and the other with unmarked stones).   Black triangle B1, B1; Black square C3, C4; Black circle D5, D6; White cross C2, D2, D3, D4; White unmarked E5, E6.     "
},
{
  "id": "sec-rules-of-the-game-5",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-5",
  "type": "Example",
  "number": "2.1.3",
  "title": "Counting liberties.",
  "body": " Counting liberties  liberties   Remember that spaces next to a group of stones (along horizontal or vertical lines) are called the liberties of the group. There are two groups in the figure below. How many liberties does each have?   Black B1, B2, C1, C2, D2; White C5, D5, E5, E6, F5.      The black group has seven liberties, and the white group has ten.    Here the liberties are marked.   Black B1, B2, C1, C2, D2; White C5, D5, E5, E6, F5. Black liberties marked with x's at A1, A2, B3, C3, D3, E2, and D1. White liberties marked with y's at C4, D4, E4, F4, G5, F6, E7, D6, C6, and B5.     "
},
{
  "id": "sec-rules-of-the-game-6",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-6",
  "type": "Example",
  "number": "2.1.4",
  "title": "Locations on the Board.",
  "body": " Locations on the Board   In order to talk about the location of stones on the board, it is helpful to have a notation for the intersections. To do this we number the rows from bottom to top, and we use letters (starting with A and skipping I) across the bottom.   A 19 by 19 board with rows and columns labeled.    The nine small dots on the board are called star points . star points They are simply there as reference points. We reference intersections by listing the letter first followed by the number. For example, the white stone is at the D8 point. The black stone is at the M17 point. The center star point, at K10, is sometimes referred to by its Japanese name tengen . tengen The corner star points are called 4-4 points (four lines from the two nearest sides), but if we want to name a specific 4-4 point we can use the label D4, D16, Q4, or Q16.   "
},
{
  "id": "sec-rules-of-the-game-7",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-7",
  "type": "Example",
  "number": "2.1.5",
  "title": "Legal and Illegal Moves.",
  "body": " Legal and Illegal Moves   Consider white's move in this corner situation. White can capture the black stone in the corner with a move at T2.   Black R1, R2, S3, T1; White S1, S2    The result is   Black R1, R2, S3; White S1, S2, T2    Now black cannot play in the corner at T1, as that would be an illegal self-capture. Instead black plays at T3.   Black R1, R2, S3, T3; White S1, S2, T2    Now white cannot play at T1 as that would result in the self-capture of the four white stones. Let's say white plays at R3.   Black R1, R2, S3, T3; White S1, S2, T2, R3    Can black now play in the corner at T1? Yes! Enemy captures happen before self-captures. If black was not capturing stones, the move would be illegal, but since black is capturing stones, it is a legal move.   Black R1, R2, S3, T3, T1; White R3     "
},
{
  "id": "sec-rules-of-the-game-8",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-8",
  "type": "Example",
  "number": "2.1.6",
  "title": "Counting the Score.",
  "body": " Counting the Score   Here is an example of a game that has finished on a 7 7 board.   Black D1, E1, G1, E2, G2, F3, D3, D4, E4, F4, G4, D5, C4, A5, B5, D6, D7; White A1, C1, A2, C2, D2, B3, C3, A4, B4, E5, F5, G5, E6, G6, E7, F7.    Why is the game completed? Neither side has any meaningful moves remaining. (Meaningful moves either increase your territory or reduce your opponent's territory, threaten to capture stones or protect your stones from being captured.) You might ask, \"Why doesn't black play at B1?\" Well, white will immediately play at B2, capturing the black stone. The end result is that white's territory is reduced by one since they placed an extra stone inside their own territory, but they increase their captures by one, resulting in no change to their overal score (territory plus captures). In general, there is no benefit to placing stones in your opponent's territory unless you have an opportunity to capture some stones.  Suppose that white has captured 4 black stones and black has captured 3 white stones. What is the final score of the game?    Black has 14 points (11 points of territory and 3 captures), while white has 9 points (five points of territory and four captures). Black wins by five points.    In online games, the computer will calculate the score for you, of course. For in-person games, counting the score by hand is done by each player filling their opponents' territory with their captures and then counting the remaining territory. In this example, using captured stones to fill territory might look like the following.   A completed 7x7 game, with territory filled by captures.    After the captures have been placed, black now has 7 points of territory and white has two. The final scores have changed but the difference is the same. Black still wins by five.   "
},
{
  "id": "sec-rules-of-the-game-9",
  "level": "2",
  "url": "sec-rules-of-the-game.html#sec-rules-of-the-game-9",
  "type": "Example",
  "number": "2.1.7",
  "title": "The Ko Rule and Ko Fights.",
  "body": " The Ko Rule and Ko Fights    ko  ko fight  ko threat Suppose that white has just captured a black stone by placing the marked stone below.   Black C2, C3, D2, E3; White C4, E4, D5, D3.    Black cannot immediately recapture with a move at D4 (the star point) because of the ko rule.  Black must play somewhere else on the board. Suppose black plays at F3, extending their weak stone. White now has a choice. White can play elsewhere on the board, or they can play at D4 ending the \"ko fight.\"   Same as previous with Black F3 and White D4.    Here white has ended the ko. White is left with an inefficient clump of stones, but they have lots of liberties and are not in immediate danger.  Here's a more complicated example of a ko. As before, white has just taken the stone at D4 to start the ko. This time black has a better move, the marked stone at G3. This kind of move is called a \"ko threat.\" It threatens to take something more valuable than the ko, forcing your opponent to respond away from the ko and allowing you to retake the ko.   Black C2, C3, D2, E3, F1, F2, F3, G1, J2, K1, K2, G3; White C4, E4, D3, D5, G2, H1, H2, J1, G4, H4.    In this case black is threatening the four white stones. White has to choose between saving the four white stones and ending the ko. If white saves the four stones, then black can re-take the ko with a stone at D4.   Same as previous with White H3 added, and Black captures at D4.    Now it's white's turn to look for a ko threat somewhere else on the board. If they can force black to respond elsewhere, then white can re-take the ko. If they can't find a ko threat, then black can play at D3 ending the ko. This process of taking turns looking for ko threats and retaking the ko is called a ko fight. It is a natural consequence of the ko rule.   "
},
{
  "id": "exercises-rules-2",
  "level": "2",
  "url": "sec-rules-of-the-game.html#exercises-rules-2",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " How many groups are depicted in this board? How many liberties does each group have? How many unoccupied liberties does each group have?   Black J8, J9, J10, K9, L9, K11, L11, M11; White K10, L10, M10, M9, J11, H11, H10, K8, L8.     Remember that diagonal stones are NOT connected!   There are two black groups and three white groups, numbered below.   Two black groups and three white groups, numbered.      Group 1 has 3 stones, 7 total liberties, and 5 unoccupied liberties.  Group 2 has 5 stones, 10 total liberties, and 3 unoccupied liberties.  Group 3 has 2 stones, 6 total liberties, and 3 unoccupied liberties.  Group 4 has 3 stones, 8 total liberties, and 4 unoccupied liberties.  Group 5 has 4 stones, 9 total liberties, and 3 unoccupied liberties.    "
},
{
  "id": "sec-capturing-stones",
  "level": "1",
  "url": "sec-capturing-stones.html",
  "type": "Section",
  "number": "2.2",
  "title": "Capturing Stones",
  "body": " Capturing Stones  atari   A group of stones is captured when all of its liberties are taken by their opponent's stones. When a group has only one liberty remaining, the group is one move away from being captured and we say the group is in atari . (If you are as old as me, you might be familiar with Atari as the name of a video game company. Atari was a term in Go first!) We also use the word atari as a verb in statements like, \"I will atari your stones with the following move.\"  When stones are in atari we have to decide whether we want to try to save them from capture. In order to save a group in atari we must play to give the group more liberties. We can do that by capturing some of the stones taking our liberties, or (possibly) by extending our group at the point of its last liberty.   Saving Stones in Atari   On the following board, assume it is white's move and notice that the two white stones are in atari. Where can white play to save their stones?   White D1, D2; Black C1, C2, B3, B4, E1, E2.      Playing at D3 gives white's stones three liberties and a chance to escape.   White D1, D2, D3; Black C1, C2, B3, B4, E1, E2.       Stones in Atari   Consider the following situation. Which group of stones is in atari?   White A2, B2, B3, B4, C5, C6, B6, A6; Black B1, C1, C2, C3, C4, B5, A4, A5.    The black group on the left is the only group in atari. (The white group on the bottom has two liberties.) Notice that there is nothing black can do to gain more liberties! Black can't place a stone at A3 since that would be a self-capture, and black cannot capture stones in one move.  Suppose black plays at A1. Now which stones are in atari?   White A2, B2, B3, B4, C5, C6, B6, A6; Black B1, C1, C2, C3, C4, B5, A4, A5, A1.    Now the four white stones at the bottom and the three black stones are both in atari, but it's white's turn. Can white play at A3? Yes! White A3 captures the three black stones!   White A2, B2, B3, B4, C5, C6, B6, A6, A3; Black B1, C1, C2, C3, C4, A1.      Intersections on the edge of the board have fewer adjecent intersections, so stones there have fewer liberties. Here is a short video showing some common capturing races near the edge of the board, and you can see how the edge of the board is used to help capture stones.   Michael Redmond Chasing Stones      Ladders  ladder  One important and common shape in capturing races is called a ladder. The start of a ladder appears on the following board.   White D4, E4; Black C4, D3, D5, E3.    Notice that black can atari the two white stones in two ways, with a move at E5 or at F4. If black ataris at E5, white can extend their stones, increasing their liberties from one to three, and thereby escape. Think about what will happen if black ataris at F4 instead. White can extend to increase their liberties from one to two, but this gives black the ability to place white in atari again on the next move.   White D4, E4, E5; Black C4, D3, D5, E3, F4.    Do you see how this might play out?   White D4, E4, E5, E6; Black C4, D3, D5, E3, F4, F5.    Black can keep white on the run with one atari after another! If there are no other stones on the board, they can run all the way to the edge of the board, where black can capture all of the white stones.   White D4, E4, E5; Black C4, D3, D5, E3, F4. Ladder moves to the edge.    If there is any white stone along that path, however, then the ladder is said to be broken. Suppose our starting position actually looked like this.   White D4, E4, Q15; Black C4, D3, D5, E3.    Now if we run out the ladder, white escapes! Black cannot atari white in one move, and look at all the moves white can make to put black stones in atari! This is one surprising way in which a capturing race on one side of the board can depend on stones on the opposite side of the board. Familiarize yourself with the ladder shape. It is am important one!   White D4, E4, Q15; Black C4, D3, D5, E3. Ladder run out.    Here's a video from Nick Sibicky all about reading ladders. It's a longer video (about 40 minutes) and includes some practice problems and their solutions. Pause the video and try the problems for yourself before looking at the solutions!   Nick Sibicky Ladder Problems     "
},
{
  "id": "sec-capturing-stones-3-3",
  "level": "2",
  "url": "sec-capturing-stones.html#sec-capturing-stones-3-3",
  "type": "Example",
  "number": "2.2.1",
  "title": "Saving Stones in Atari.",
  "body": " Saving Stones in Atari   On the following board, assume it is white's move and notice that the two white stones are in atari. Where can white play to save their stones?   White D1, D2; Black C1, C2, B3, B4, E1, E2.      Playing at D3 gives white's stones three liberties and a chance to escape.   White D1, D2, D3; Black C1, C2, B3, B4, E1, E2.     "
},
{
  "id": "sec-capturing-stones-3-4",
  "level": "2",
  "url": "sec-capturing-stones.html#sec-capturing-stones-3-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "Stones in Atari.",
  "body": " Stones in Atari   Consider the following situation. Which group of stones is in atari?   White A2, B2, B3, B4, C5, C6, B6, A6; Black B1, C1, C2, C3, C4, B5, A4, A5.    The black group on the left is the only group in atari. (The white group on the bottom has two liberties.) Notice that there is nothing black can do to gain more liberties! Black can't place a stone at A3 since that would be a self-capture, and black cannot capture stones in one move.  Suppose black plays at A1. Now which stones are in atari?   White A2, B2, B3, B4, C5, C6, B6, A6; Black B1, C1, C2, C3, C4, B5, A4, A5, A1.    Now the four white stones at the bottom and the three black stones are both in atari, but it's white's turn. Can white play at A3? Yes! White A3 captures the three black stones!   White A2, B2, B3, B4, C5, C6, B6, A6, A3; Black B1, C1, C2, C3, C4, A1.     "
},
{
  "id": "sec-capturing-stones-3-6",
  "level": "2",
  "url": "sec-capturing-stones.html#sec-capturing-stones-3-6",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " Michael Redmond Chasing Stones   "
},
{
  "id": "subsec-Ladders-16",
  "level": "2",
  "url": "sec-capturing-stones.html#subsec-Ladders-16",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": " Nick Sibicky Ladder Problems   "
},
{
  "id": "sec-shapes",
  "level": "1",
  "url": "sec-shapes.html",
  "type": "Section",
  "number": "2.3",
  "title": "Good and Bad Shapes",
  "body": " Good and Bad Shapes   solid connection  diagonal connection  one-space jump  When playing your first few games, the number of possibilities available seems overwhelming. Which moves are good? Which moves are bad? How can we decide? To help narrow down the possibilities it helps to become familiar with some common shapes that appear in games of Go. You will often hear Go players talk about \"making good shape.\" The first concept to understand is how to efficiently build shapes while keeping your stones connected. Once again, we turn to Michael Redmond for the basics.   Michael Redmond Connected Shapes      Looser Connections  knights move  large knights move  cut  diagonal jump  The video covered solid connections, diagonal connections, and the one-space jump. There are even more efficient ways to expand, but they are riskier. Perhaps the most common is the knight's move. The knight's move is two steps in one direction and one step in another, like a knight moves in chess. It stretches a little farther than a one-space jump but it is easier for your opponent to separate, or cut, the two stones.   Black Q16, O17    Here's one possible sequence that shows how white can cut the black knight's move into two separate groups.   Black Q16, O17, White P16, Black P17, White Q17    Unless black can capture one of white's cutting stones, the two black groups will remain separated. Of course, the two white stones are also cut, so what we really have here is the start of a fight! Black has to be aware of this possiblity, and white will have to evaluate whether the fight helps them before attempting the cut. The knight's move is especially strong near the edges of the board, where one of the cutting stones will be in danger of being run into the edge of the board and captured.  The diagonal jump is another loose connection, stretching a bit farther and a little easier to cut. The diagonal jump is called hazama tobi in Japanese, and is sometimes called the elephant jump because it reflects how the elephant piece moves in Chinese chess.   Black Q15, O17    You can see how white could keep these two black stones from connecting by placing a stone right in the middle. This will, of course, lead to a complicated fight!  Jumping any farther than this is too loose to consider a true connection, but instead form larger structures that outline potential territories. Moves like a two-space or three-space jump are usually referred to as extensions. The large knight's move shown here is another extension usually only played near the edge of the board.   Black Q16, N17      Eyes  ponnuki  eye  alive  dead  The diamond shape shown here is called a \"ponnuki,\" the Japanese term for bloom, and is a very powerful shape. There is a Go proverb that says \"A ponnuki is worth 30 points.\"   Black D5, E4, E6, F5    A ponnuki radiates power in all directions, and is very hard to attack. It creates one space on the board (right in the middle) that it is illegal for your opponent to play (unless capturing). It is progress toward creating a shape called an eye, which we will see is a very important concept.  A rough definition of an eye is that it is an empty space surrrounded by stones of one color (like a ponnuki) that can be connected into a chain of solidly connected stones surrounding the empty point. The following example shows that a group with one eye can be captured.   One Eye   The following board shows a black group with one eye. What would white have to do to capture this group?   Black D4, D5, D6, E4, E6, F5, F6      White cannot place a stone in the middle unless they are capturing, so they first have to fill all of the outside liberties. Once they do, however, the black stones will be in atari, black cannot place in the middle (an illegal self-capture), so white can place in the middle and capture the whole black group.   Black D4, D5, D6, E4, E6, F5, F6, White taking all outside liberties.      The rules of Go say nothing about eyes, but an important consequence of the rules is that a group with two eyes cannot be captured. A group with two eyes is said to be alive . A group that can be reduced to one eye (or no eyes) can be captured eventually and is said to be dead . The following example examines a group with two eyes.   Two Eyes Makes Life   The following board shows a black group with two eyes surrounded by white stones. Is there anything white can do to capture the black group?   Black D4, D5, D6, E4, E6, F5, F6, G4, G6,H4, H5, H6; White taking all outside liberties.      White cannot place a stone in either of the empty spaces in black's group (illegal self-captures), but white has to fill both of those liberties to capture the black stones! The black group is alive and permanently safe.    It is worth saying again. This is a surprising consequence of the rules. The rules say nothing about eyes, but the need for a group to have two eyes emerges as perhaps the most important concept in Go! If you cannot give a group of stones two eyes, then that group of stones will be (eventually) captured. Making shapes with two-eyes is an extremely important skill!    Other Good Shapes  mouth shape  table shape  bamboo joint  Shapes are generally called \"good\" when they can easily be made into eyes, or when they form a solid connection. Here we outline some commonly occurring good shapes. If you make these shapes in your games, you are doing well!   Mouth Shape   The following black stones form what is called the mouth shape. The mouth shape is an efficient arrangement of stones that virtually guarantees a group with one eye.   Black D4, D5, E3, F3, F5       Table Shape   The following black stones form what is called the table shape. The table shape can be made into the mouth shape by adding one stone. It is more efficient since it requires one less stone, and is almost as good as mouth shape at creating potential for an eye.   Black D4, D5, F3, F5       Bamboo Joint   A bamboo joint shown here isn't easy to turn into an eye, but it does form a solid connection that your opponent cannot cut.   Black D4, D5, F4, F5        Some Bad Shapes  Bad shapes are shapes that are very inefficient at creating eyes. Big clumps of stones with no eyes, sometimes called dumplings, are obviously bad. The following example shows a clump that might naturally arise in a game.   The B-52 Bomber   Consider the following board situation. Black was trying to attack the white stones, but has left cutting points at A and B, and should to try to protect one or the other.   Black C5, D4, E3, E2; White B4, C4, C3, D3, D2; A at D5, B at E4    What will happen if black tries to protect both cutting points with a move at E5 (marked with an x)?    One possible sequence might look like this. Do you see the B-52 bomber shape?   Black C5, D4, E3, E2; White B4, C4, C3, D3, D2;    I've also heard Black's shape called the \"big stupid triangle\" in this situation. Black has a big clump of stones that are not surrounding any territory. They are not making any space for eyes to form. They are just inefficiently placed stones. When this is the result, it is safe to say that Black probably should have played otherwise earlier on. In this case, trying to fix both cuts with one move at E5 was a mistake.    Another, perhaps more subtle, example of bad shape is what is called the \"empty triangle.\" Strong players try to avoid making empty triangles if they can.   The Empty Triangle   Recall that one good way to make a connection is with a diagonal move.   Black F7, G8    If White tries to cut on either side, then Black can play the other point to strongly connect the two stones.   Black F7, G8, G7; White F8    Here the black stones are forming a triangle that is filled in by the white stone. This is natural and good! White forced black to make the triangle by threatening to cut.  If Black makes that triangle shape without the white stone there, that is what is called an empty triangle. Black has wasted a move by fixing the cut before White even threatened it. In most cases, Black would rather have the diagonal connection without the triangle. Making the empty triangle is another inefficient shape.  (Sometimes making an empty triangle is the best move in a given situation. Whenever you see yourself about to make an empty triangle, though, you should look to see if there are better options!)    Avoid this shape if you can!   Black F7, G8, G7; White F8      The final example more about tactics than specifically about shape. There is a Go proverb, \"Don't attach to a weak stone.\" The reason for this is that doing so generally makes the opponent's weak stone stronger, and gives them an advantage over your attaching stone.   Attaching to a Weak Stone   Here we see that White has attached to a weak Black stone. Think of this as a capturing race between the two stones. When White attached, that reduced Black's liberties by one (from four to three). However, the White stone also has reduced their own liberties! Both stones have three liberties, and it is Black's turn. Black has the advantage in that capturing race.   Black F3; White G3    Even if Black doesn't try to take up White's liberties right away, Black can extend their stone, increasing the liberty count of the Black group.   Black F3; White G3    If the Black stone was weak before, it certainly looks stronger now. All White has accomplished is strengthening their opponent's stone!  In general, if you want to attack a weak stone, it is much better to build a loose net around it, hopefully while building up potential territory for yourself on the other side of the stones that you play.      Live and Dead Shapes  Now that we know about living and dead groups, and the importance of having two eyes, we can look at some common shapes and decide if they are alive or dead. A group that has two eyes is alive. A group that can be reduced to one (or fewer) eyes is dead.   Three Spaces   Any group surrounding just three spaces is a dead shape (assuming it is your opponent's turn).   White 3 space territory, surrounded by Black    How can Black prevent the White group from forming two eyes?    vital point  A vital point in a shape is a point that determines the life or death of the shape. If Black plays the vital point, the shape dies. If White plays the vital point, the shape gains two eyes and unconditionally lives. The vital point is the middle of the three spaces.   White 3 space territory, surrounded by Black, Black plays the middle point.    If White plays on either side to atari this stone, it is actually self-atari and Black captures the whole group.  If White plays elsewhere, normally Black would also leave this alone, knowing it is a dead shape. At the end of the game, both players would agree that the White stones are dead, they would be taken off the board and given to Black as captures.  If Black really wants to capture these stones (or needs to in order to prevent something else from being captured), Black can play a second stone inside White's territory placing White in atari.   White 3 space territory, surrounded by Black, Black plays the middle point plus one.    If White captures the two stones, Black can again play inside, putting the White stones in atari once more.   White 2 space territory, surrounded by Black, Black plays inside.    If White captures again, White has created a one space territory completely surrounded by Black. White is in atari and will be captured on the next move.   White 1 space territory, surrounded by Black, is in atari.    It doesn't matter whether the three spaces are in a row (as shown) or bent. The same logic applies, and the middle point is the vital point. The life and death of the group is determined by who plays the vital point.  If White is allowed to play on the vital middle point, then White has a two-eye, living group. White is unconditionally alive.   White two-eyed group.      If a three-space group is dead, what about a four-space group? The answer is that it depends! If the four spaces form a squareor a T-shape, Black can kill the groups. Any other arrangement of four spaces is generally alive. (There are some exceptions, but they are complicated and rare.)   Four Spaces (Alive)   When four spaces are not in a square or a T shape, there is no way for Black to prevent white from dividing the territory into two eyes.   White 4 space territory in an L shape, surrounded by Black.      If White is allowed to play at either A or B, White's group will have two eyes. If Black plays at either of these points, White can play on the other and live.   White 4 space territory in an L shape, surrounded by Black. Two middle points marked A and B       Four Spaces (Square)   When White has four spaces in a square shape, Black can play anywhere inside. If White plays anywhere inside, the group is reduced to three spaces and dies. (If White neve plays inside, Black will eventually atari and kill.)     Four Spaces (T-shape)   When White has four spaces in a T-shape, the vital point is the center point. If Black plays there, White has no way to make two eyes. If White plays there, then white has a living group (with three eyes).   White 4 space territory in a T-shape, surrounded by Black. Middle points marked x       Bulky Five    bulky five A bulky five shape is a square with an extra space added. This can be killed. Can you find the vital point?   White bulky five, surrounded by Black.      The vital point is marked. If Black plays here, there is no way for White to make two eyes. If White plays here, they have two eyes and are unconditionally alive.   White bulky five, surrounded by Black. Vital point in the square, next to the extra space.       Cross Five    cross five Five spaces in the shape of a cross can be killed. Can you find the vital point?   White cross five, surrounded by Black.      The vital point is in the center, of course!   White cross five, surrounded by Black.       Rabbity Six    rabbity six A square with two extra spaces on either side of a corner (sticking out like rabbit ears) is called a rabbity six shape. This shape can be killed! Can you find the vital point?   Rabbity six, surrounded by Black.      The vital point is the corner at the base of the \"ears.\"   Rabbity six, surrounded by Black.       "
},
{
  "id": "sec-shapes-2-5",
  "level": "2",
  "url": "sec-shapes.html#sec-shapes-2-5",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " Michael Redmond Connected Shapes   "
},
{
  "id": "subsec-Eyes-10",
  "level": "2",
  "url": "sec-shapes.html#subsec-Eyes-10",
  "type": "Example",
  "number": "2.3.2",
  "title": "One Eye.",
  "body": " One Eye   The following board shows a black group with one eye. What would white have to do to capture this group?   Black D4, D5, D6, E4, E6, F5, F6      White cannot place a stone in the middle unless they are capturing, so they first have to fill all of the outside liberties. Once they do, however, the black stones will be in atari, black cannot place in the middle (an illegal self-capture), so white can place in the middle and capture the whole black group.   Black D4, D5, D6, E4, E6, F5, F6, White taking all outside liberties.     "
},
{
  "id": "subsec-Eyes-12",
  "level": "2",
  "url": "sec-shapes.html#subsec-Eyes-12",
  "type": "Example",
  "number": "2.3.3",
  "title": "Two Eyes Makes Life.",
  "body": " Two Eyes Makes Life   The following board shows a black group with two eyes surrounded by white stones. Is there anything white can do to capture the black group?   Black D4, D5, D6, E4, E6, F5, F6, G4, G6,H4, H5, H6; White taking all outside liberties.      White cannot place a stone in either of the empty spaces in black's group (illegal self-captures), but white has to fill both of those liberties to capture the black stones! The black group is alive and permanently safe.   "
},
{
  "id": "subsec-other-good-shapes-6",
  "level": "2",
  "url": "sec-shapes.html#subsec-other-good-shapes-6",
  "type": "Example",
  "number": "2.3.4",
  "title": "Mouth Shape.",
  "body": " Mouth Shape   The following black stones form what is called the mouth shape. The mouth shape is an efficient arrangement of stones that virtually guarantees a group with one eye.   Black D4, D5, E3, F3, F5     "
},
{
  "id": "subsec-other-good-shapes-7",
  "level": "2",
  "url": "sec-shapes.html#subsec-other-good-shapes-7",
  "type": "Example",
  "number": "2.3.5",
  "title": "Table Shape.",
  "body": " Table Shape   The following black stones form what is called the table shape. The table shape can be made into the mouth shape by adding one stone. It is more efficient since it requires one less stone, and is almost as good as mouth shape at creating potential for an eye.   Black D4, D5, F3, F5     "
},
{
  "id": "subsec-other-good-shapes-8",
  "level": "2",
  "url": "sec-shapes.html#subsec-other-good-shapes-8",
  "type": "Example",
  "number": "2.3.6",
  "title": "Bamboo Joint.",
  "body": " Bamboo Joint   A bamboo joint shown here isn't easy to turn into an eye, but it does form a solid connection that your opponent cannot cut.   Black D4, D5, F4, F5     "
},
{
  "id": "subsec-bad-shapes-3",
  "level": "2",
  "url": "sec-shapes.html#subsec-bad-shapes-3",
  "type": "Example",
  "number": "2.3.7",
  "title": "The B-52 Bomber.",
  "body": " The B-52 Bomber   Consider the following board situation. Black was trying to attack the white stones, but has left cutting points at A and B, and should to try to protect one or the other.   Black C5, D4, E3, E2; White B4, C4, C3, D3, D2; A at D5, B at E4    What will happen if black tries to protect both cutting points with a move at E5 (marked with an x)?    One possible sequence might look like this. Do you see the B-52 bomber shape?   Black C5, D4, E3, E2; White B4, C4, C3, D3, D2;    I've also heard Black's shape called the \"big stupid triangle\" in this situation. Black has a big clump of stones that are not surrounding any territory. They are not making any space for eyes to form. They are just inefficiently placed stones. When this is the result, it is safe to say that Black probably should have played otherwise earlier on. In this case, trying to fix both cuts with one move at E5 was a mistake.   "
},
{
  "id": "subsec-bad-shapes-5",
  "level": "2",
  "url": "sec-shapes.html#subsec-bad-shapes-5",
  "type": "Example",
  "number": "2.3.8",
  "title": "The Empty Triangle.",
  "body": " The Empty Triangle   Recall that one good way to make a connection is with a diagonal move.   Black F7, G8    If White tries to cut on either side, then Black can play the other point to strongly connect the two stones.   Black F7, G8, G7; White F8    Here the black stones are forming a triangle that is filled in by the white stone. This is natural and good! White forced black to make the triangle by threatening to cut.  If Black makes that triangle shape without the white stone there, that is what is called an empty triangle. Black has wasted a move by fixing the cut before White even threatened it. In most cases, Black would rather have the diagonal connection without the triangle. Making the empty triangle is another inefficient shape.  (Sometimes making an empty triangle is the best move in a given situation. Whenever you see yourself about to make an empty triangle, though, you should look to see if there are better options!)    Avoid this shape if you can!   Black F7, G8, G7; White F8     "
},
{
  "id": "subsec-bad-shapes-7",
  "level": "2",
  "url": "sec-shapes.html#subsec-bad-shapes-7",
  "type": "Example",
  "number": "2.3.9",
  "title": "Attaching to a Weak Stone.",
  "body": " Attaching to a Weak Stone   Here we see that White has attached to a weak Black stone. Think of this as a capturing race between the two stones. When White attached, that reduced Black's liberties by one (from four to three). However, the White stone also has reduced their own liberties! Both stones have three liberties, and it is Black's turn. Black has the advantage in that capturing race.   Black F3; White G3    Even if Black doesn't try to take up White's liberties right away, Black can extend their stone, increasing the liberty count of the Black group.   Black F3; White G3    If the Black stone was weak before, it certainly looks stronger now. All White has accomplished is strengthening their opponent's stone!  In general, if you want to attack a weak stone, it is much better to build a loose net around it, hopefully while building up potential territory for yourself on the other side of the stones that you play.   "
},
{
  "id": "subsec-dead-shapes-3",
  "level": "2",
  "url": "sec-shapes.html#subsec-dead-shapes-3",
  "type": "Example",
  "number": "2.3.10",
  "title": "Three Spaces.",
  "body": " Three Spaces   Any group surrounding just three spaces is a dead shape (assuming it is your opponent's turn).   White 3 space territory, surrounded by Black    How can Black prevent the White group from forming two eyes?    vital point  A vital point in a shape is a point that determines the life or death of the shape. If Black plays the vital point, the shape dies. If White plays the vital point, the shape gains two eyes and unconditionally lives. The vital point is the middle of the three spaces.   White 3 space territory, surrounded by Black, Black plays the middle point.    If White plays on either side to atari this stone, it is actually self-atari and Black captures the whole group.  If White plays elsewhere, normally Black would also leave this alone, knowing it is a dead shape. At the end of the game, both players would agree that the White stones are dead, they would be taken off the board and given to Black as captures.  If Black really wants to capture these stones (or needs to in order to prevent something else from being captured), Black can play a second stone inside White's territory placing White in atari.   White 3 space territory, surrounded by Black, Black plays the middle point plus one.    If White captures the two stones, Black can again play inside, putting the White stones in atari once more.   White 2 space territory, surrounded by Black, Black plays inside.    If White captures again, White has created a one space territory completely surrounded by Black. White is in atari and will be captured on the next move.   White 1 space territory, surrounded by Black, is in atari.    It doesn't matter whether the three spaces are in a row (as shown) or bent. The same logic applies, and the middle point is the vital point. The life and death of the group is determined by who plays the vital point.  If White is allowed to play on the vital middle point, then White has a two-eye, living group. White is unconditionally alive.   White two-eyed group.     "
},
{
  "id": "subsec-dead-shapes-5",
  "level": "2",
  "url": "sec-shapes.html#subsec-dead-shapes-5",
  "type": "Example",
  "number": "2.3.11",
  "title": "Four Spaces (Alive).",
  "body": " Four Spaces (Alive)   When four spaces are not in a square or a T shape, there is no way for Black to prevent white from dividing the territory into two eyes.   White 4 space territory in an L shape, surrounded by Black.      If White is allowed to play at either A or B, White's group will have two eyes. If Black plays at either of these points, White can play on the other and live.   White 4 space territory in an L shape, surrounded by Black. Two middle points marked A and B     "
},
{
  "id": "subsec-dead-shapes-6",
  "level": "2",
  "url": "sec-shapes.html#subsec-dead-shapes-6",
  "type": "Example",
  "number": "2.3.12",
  "title": "Four Spaces (Square).",
  "body": " Four Spaces (Square)   When White has four spaces in a square shape, Black can play anywhere inside. If White plays anywhere inside, the group is reduced to three spaces and dies. (If White neve plays inside, Black will eventually atari and kill.)   "
},
{
  "id": "subsec-dead-shapes-7",
  "level": "2",
  "url": "sec-shapes.html#subsec-dead-shapes-7",
  "type": "Example",
  "number": "2.3.13",
  "title": "Four Spaces (T-shape).",
  "body": " Four Spaces (T-shape)   When White has four spaces in a T-shape, the vital point is the center point. If Black plays there, White has no way to make two eyes. If White plays there, then white has a living group (with three eyes).   White 4 space territory in a T-shape, surrounded by Black. Middle points marked x     "
},
{
  "id": "subsec-dead-shapes-8",
  "level": "2",
  "url": "sec-shapes.html#subsec-dead-shapes-8",
  "type": "Example",
  "number": "2.3.14",
  "title": "Bulky Five.",
  "body": " Bulky Five    bulky five A bulky five shape is a square with an extra space added. This can be killed. Can you find the vital point?   White bulky five, surrounded by Black.      The vital point is marked. If Black plays here, there is no way for White to make two eyes. If White plays here, they have two eyes and are unconditionally alive.   White bulky five, surrounded by Black. Vital point in the square, next to the extra space.     "
},
{
  "id": "subsec-dead-shapes-9",
  "level": "2",
  "url": "sec-shapes.html#subsec-dead-shapes-9",
  "type": "Example",
  "number": "2.3.15",
  "title": "Cross Five.",
  "body": " Cross Five    cross five Five spaces in the shape of a cross can be killed. Can you find the vital point?   White cross five, surrounded by Black.      The vital point is in the center, of course!   White cross five, surrounded by Black.     "
},
{
  "id": "subsec-dead-shapes-10",
  "level": "2",
  "url": "sec-shapes.html#subsec-dead-shapes-10",
  "type": "Example",
  "number": "2.3.16",
  "title": "Rabbity Six.",
  "body": " Rabbity Six    rabbity six A square with two extra spaces on either side of a corner (sticking out like rabbit ears) is called a rabbity six shape. This shape can be killed! Can you find the vital point?   Rabbity six, surrounded by Black.      The vital point is the corner at the base of the \"ears.\"   Rabbity six, surrounded by Black.     "
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
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
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