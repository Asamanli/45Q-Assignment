function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Atif", "Sad songs"));
console.log(make_album("Ali.Z", "PSL songs"));
console.log(make_album("Ali.A", "Hiphop songs", 10));
