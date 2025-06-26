const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = ["playlist-modify-public", "playlist-modify-private"];

let accessToken;
let tokenExpirationTime;

const SpotifyAuth = {
  getAccessToken() {
    // Check if token exists and isn't expired
    if (accessToken && !this.isTokenExpired()) {
      return accessToken;
    }

    // Check URL for access token
    const urlTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (urlTokenMatch && expiresInMatch) {
      accessToken = urlTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      tokenExpirationTime = Date.now() + expiresIn * 1000;

      // Clear URL parameters
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      // Redirect to Spotify authorization
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scopes.join(
        "%20"
      )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
      window.location = authUrl;
    }
  },

  isTokenExpired() {
    return (
      !accessToken || !tokenExpirationTime || Date.now() > tokenExpirationTime
    );
  },
};

export default SpotifyAuth;
