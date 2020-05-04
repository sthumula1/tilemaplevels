function buildLevel () {
    if (nextLevel == levels.length) {
        game.over(true)
    }
    scene.setTileMap(levels[nextLevel])
    for (let value of scene.getTilesByType(15)) {
        value.place(player)
    }
    nextLevel += 1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
function doSomething () {
	
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
let projectile: Sprite = null
let nextLevel = 0
let player: Sprite = null
let levels: Image[] = []
levels = [img`
. . . . . . . . . . 
d d . d d d d . . d 
. . . d . . . . d d 
. d . d . d d d d d 
. d . . . d . d d d 
. d . d . . . . . . 
. d d d d d d d d . 
. . . . . 7 d d . . 
`, img`
d d d . f . . d d d 
8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 
d d d . . . . d d d 
e e e e e e e e e e 
d d d . . . . d d d 
e e e e e e e e e e 
d d d . . . . . . 7 
`, img`
. 7 . . . . . . . . . 7 7 . . . 
. 7 7 7 . . 7 7 . . . . 7 7 . 7 
. 7 . . 7 7 . . 7 7 . . . 7 . 7 
7 7 . . . 7 . . . 7 7 . . 7 7 7 
7 . . . . 7 . . . . 7 . . . 7 7 
7 . . . . 7 . . . . 7 . . . 7 7 
. 7 . . . 7 7 7 . . 7 . . . 7 7 
. 7 . . . 7 . 7 . . 7 . . . 7 7 
. 7 . . . 7 . . 7 7 7 . . . 7 7 
. 7 . . . 7 . . . 7 7 . . . 7 7 
. 7 . . . 7 . . . . 7 . . . 7 7 
. 7 . . . 7 . . . 7 7 . . . 7 7 
. 7 . . 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 . . . 7 . . . . 7 . . . 7 . 
. 7 . . . 7 7 7 7 7 7 7 7 7 7 . 
. 7 . . . 7 . . . . . . . . . . 
`, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f 2 2 2 f 8 8 8 f 5 5 5 f a a a 
f 2 2 2 f 8 8 8 f 5 5 5 f a a a 
f 1 1 2 f 1 1 1 f 1 1 1 f 1 a 1 
f 2 1 2 f 8 8 1 f 5 5 1 f 1 a 1 
f 2 1 2 f 1 1 1 f 5 1 1 f 1 1 1 
f 2 1 2 f 1 8 8 f 5 5 1 f a a 1 
f 1 1 1 f 1 1 1 f 1 1 1 f a a 1 
f 2 2 2 f 8 8 8 f 5 5 5 f a a a 
f 2 2 2 f 8 8 8 f 5 5 5 f a a a 
`]
scene.setTile(7, img`
a c c c c c c c c c c c c c c c 
c d d d d b d d d d b c d d b b 
c d d d d b d d d d b c d d b b 
a b b b b c b b b b b c d d b b 
f f f f f f f f f f f c d d b b 
c c c c c c c c c c c c d d b b 
f f f f f f f f f f f c d d b b 
f f f f f c c c c c c c d d b b 
c c c c c f f f f f f c d d b b 
f f f f f f f f f f f c d d b b 
c c c c c c c c c c c c d d b b 
f f f f f f f f f f f c d d b b 
a b b b b c b b b b b c d d b b 
c d d d d b d d d d b c d d b b 
c d d d d b d d d d b c d d b b 
a c c c c c c c c c c c c c c c 
`, true)
scene.setTile(13, img`
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(8, img`
c c c c c c c c c c c c c c c c 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 6 6 6 8 8 8 6 6 6 6 8 8 8 
6 6 8 8 8 6 6 6 6 6 6 8 8 8 8 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
9 9 6 6 6 6 6 9 9 9 9 6 6 6 9 9 
6 6 6 6 9 9 9 6 6 6 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
scene.setTile(14, img`
c c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b 1 1 1 1 d b b b 1 1 1 1 d b b 
b d 1 1 1 1 b b b d 1 1 1 1 b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c 
`, false)
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . 2 d d d d d 2 . . . . . . 
. . . 2 d f d f d 2 . . . . . . 
. . . 2 d d d d d 2 . . . . . . 
. . . 2 d d 3 d d 2 . . . . . . 
. . . 2 d d d d d 2 . . . . . . 
. . d 2 2 2 2 2 2 2 d . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . . d . . . d . . . . . . . 
. . . . d . . . d . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
player.setPosition(4, 0)
controller.moveSprite(player, 100, 100)
buildLevel()
nextLevel = 0
let messages = ["First finish the maze", "Now cross all the roads", "Finally, there are three doors, pick the door to survive and you win the game. The first door is filled with hot lava that will burn you alive. The second door is filled with lions that haven't been fed in many weeks. The third door is filled with a deadly beast designed to kill, and the last door is filled with a poisonous gas that will kill you in seconds. Pick wisely."]
let blah = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
blah.setPosition(72, 8)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(40)) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f c b b b b f . . . . . . . . . . . 
. . . . . . . . . f b b b b b b b b b f f f b f . . . . . . . . . . . . 
. . . . . . . . . f b b 1 1 1 b f f b b b b f f . . . . . . . . . . . . 
. . . . . . . . . f b 1 1 1 1 1 f f b b b b b c f f . . . . . . . . . . 
. . . . . . . . . f 1 c c c c 1 1 b b c b c b c c c f . . . . . . . . . 
. . . . . . . . . . f c 1 c 1 c 1 b b b c b c b c c c f . . . c c c c c 
. . . . . . . . . . . . c 3 3 3 1 b b b c b c b c c c c f c c d d b b c 
. . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c b d d b c c . 
. . . . . . . . . . . c 3 3 1 c 1 1 b b b b b c c c c c c c b b c c . . 
. . . . . . . . . . c c 1 3 c 1 1 1 b b b b c c c c c c f f b c c f . . 
. . . . . . . . . . c 1 1 1 1 1 1 c b b b c c c c c b b c . f c c f . . 
. . . . . . . . . . . c c 1 1 1 1 c b b b f d d d d d c . . f b b c f . 
. . . . . . . . . . . . . c c c f f b d b b f d d d c . . . . f b b f . 
. . . . . . . . . . . . . . . . . . f b d b b f c c . . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . f f f 
`, 50, 0)
        projectile.setPosition(-2, 26)
    }
})
