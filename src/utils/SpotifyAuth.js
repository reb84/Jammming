const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = ["playlist-modify-public", "playlist-modify-private"];

let accessToken;
let tokenExpirationTime;

// Generate code verifier and challenge for PKCE
const generateCodeVerifier = () => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  return randomValues.reduce(
    (acc, x) => acc + possible[x % possible.length],
    ""
  );
};

const generateCodeChallenge = async (codeVerifier) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

const SpotifyAuth = {
  async getAccessToken() {
    if (accessToken && !this.isTokenExpired()) {
      return accessToken;
    }

    // Check URL for authorization code (returning from Spotify)
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Exchange authorization code for access token
      const codeVerifier = localStorage.getItem("code_verifier");

      if (!codeVerifier) {
        console.error("Code verifier not found");
        return;
      }

      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: redirectUri,
            client_id: clientId,
            code_verifier: codeVerifier,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to exchange code for token");
        }

        const data = await response.json();
        accessToken = data.access_token;
        const expiresIn = data.expires_in;
        tokenExpirationTime = Date.now() + expiresIn * 1000;

        // Clean up
        localStorage.removeItem("code_verifier");
        window.history.pushState({}, document.title, window.location.pathname);

        return accessToken;
      } catch (error) {
        console.error("Error exchanging code for token:", error);
        return;
      }
    } else {
      // Start authorization flow
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);

      // Store code verifier for later use
      localStorage.setItem("code_verifier", codeVerifier);

      const authUrl =
        `https://accounts.spotify.com/authorize?` +
        `client_id=${clientId}&` +
        `response_type=code&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scopes.join(" "))}&` +
        `code_challenge_method=S256&` +
        `code_challenge=${codeChallenge}`;

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
