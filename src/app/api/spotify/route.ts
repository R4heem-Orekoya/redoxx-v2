const getAccessToken = async () => {
   const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
         Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
         ).toString("base64")}`,
      },
      body: new URLSearchParams({
         grant_type: "refresh_token",
         refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
   });
   return res.json();
};

export async function GET() {
   const { access_token } = await getAccessToken();

   const res = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
         headers: { Authorization: `Bearer ${access_token}` },
      },
   );

   if (res.status !== 204 && res.status <= 400) {
      const data = await res.json();
      if (data.is_playing) {
         return Response.json({
            isPlaying: true,
            title: data.item.name,
            artist: data.item.artists.map((a: any) => a.name).join(", "),
            albumArt: data.item.album.images[0].url,
            songUrl: data.item.external_urls.spotify,
         });
      }
   }

   // fallback to recently played
   const recentRes = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
         headers: { Authorization: `Bearer ${access_token}` },
      },
   );

   const recentData = await recentRes.json();
   const track = recentData.items[0].track;

   return Response.json({
      isPlaying: false,
      title: track.name,
      artist: track.artists.map((a: any) => a.name).join(", "),
      albumArt: track.album.images[0].url,
      songUrl: track.external_urls.spotify,
   });
}