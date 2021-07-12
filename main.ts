scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(-1)
    music.powerDown.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeScoreBy(1)
    music.powerUp.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles15, function (sprite, location) {
    game.over(true)
})
scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . f f 5 f f . . . . . . . 
    . . . f f 2 2 2 f f . . . . . . 
    . . f f d d d d d f f f . . . . 
    . f f f d f d f d f f f f . . . 
    . f f f d d d d d f f f f f . . 
    f f f f d d d d d f f f f f . . 
    f f f f . d d d . f f f f f . . 
    f f f f 2 2 2 2 2 f f f f f . . 
    f f f d 2 2 5 2 2 d f f f f . . 
    . f f d 2 2 2 2 2 d . f f . . . 
    . . . d a a a a a d . . . . . . 
    . . . d a a a a a d . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . . d . . . d . . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(20)
