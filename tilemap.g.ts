// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020201030000000202000000000600000502010202020002020002050202000206020102020200020200020202020002000201020005000006000000000200020002010205020202020202020002000200020202060202020202020205020002000006020000000000000202020200020002000202020002020002050000000200020001010200020200020200020202000200020006000202000002000200000002000202020202020202020002020202020200000000000600000005000200000000000202020202020202000202000202000000060000000000000002020002000002020202020205020200000006050204`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . 2 2 . . . . . . . . 2 . 
2 2 2 . 2 2 . 2 . 2 2 . 2 . 2 . 
2 2 2 . 2 2 . 2 2 2 2 . 2 . 2 . 
2 . . . . . . . . . 2 . 2 . 2 . 
2 . 2 2 2 2 2 2 2 . 2 . 2 . 2 2 
2 . 2 2 2 2 2 2 2 . 2 . 2 . . . 
2 . . . . . . 2 2 2 2 . 2 . 2 . 
2 2 2 . 2 2 . 2 . . . . 2 . 2 . 
. . 2 . 2 2 . 2 2 . 2 2 2 . 2 . 
2 . . . 2 2 . . 2 . 2 . . . 2 . 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
. . . . . . . . . . . 2 . . . . 
. 2 2 2 2 2 2 2 2 . 2 2 . 2 2 . 
. . . . . . . . . . 2 2 . 2 . . 
2 2 2 2 2 2 . 2 2 . . . . . 2 . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.builtin.forestTiles15,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
