// Mock data
const mockSearchResults = [
  {
    id: "1",
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    preview_url: "https://example.com/preview1",
  },
  {
    id: "2",
    name: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:03",
    preview_url: "https://example.com/preview2",
  },
  {
    id: "3",
    name: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: "2:54",
    preview_url: "https://example.com/preview3",
  },
  {
    id: "4",
    name: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "2:58",
    preview_url: "https://example.com/preview4",
  },
  {
    id: "5",
    name: "The Good Ones",
    artist: "Gabby Barrett",
    album: "Goldmine",
    duration: "3:17",
    preview_url: "https://example.com/preview5",
  },
  {
    id: "6",
    name: "Enemy",
    artist: "Imagine Dragons",
    album: "Mercury - Acts 1 & 2",
    duration: "2:53",
    preview_url: "https://example.com/preview6",
  },
  {
    id: "7",
    name: "Heartbreak on the Map",
    artist: "Ryan Hurd",
    album: "Pelago",
    duration: "3:24",
    preview_url: "https://example.com/preview7",
  },
  {
    id: "8",
    name: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    duration: "3:24",
    preview_url: "https://example.com/preview8",
  },
  {
    id: "9",
    name: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    preview_url: "https://example.com/preview9",
  },
  {
    id: "10",
    name: "Bad Habit",
    artist: "Steve Lacy",
    album: "Gemini Rights",
    duration: "3:51",
    preview_url: "https://example.com/preview10",
  },
  {
    id: "11",
    name: "About Damn Time",
    artist: "Lizzo",
    album: "Special",
    duration: "3:11",
    preview_url: "https://example.com/preview11",
  },
  {
    id: "12",
    name: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    duration: "3:58",
    preview_url: "https://example.com/preview12",
  },
  {
    id: "13",
    name: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    album: "F*CK LOVE 3: OVER YOU",
    duration: "2:21",
    preview_url: "https://example.com/preview13",
  },
  {
    id: "14",
    name: "Anti-Hero",
    artist: "Taylor Swift",
    album: "Midnights",
    duration: "3:20",
    preview_url: "https://example.com/preview14",
  },
  {
    id: "15",
    name: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    duration: "3:20",
    preview_url: "https://example.com/preview15",
  },
  {
    id: "16",
    name: "Unholy",
    artist: "Sam Smith ft. Kim Petras",
    album: "Gloria",
    duration: "2:36",
    preview_url: "https://example.com/preview16",
  },
  {
    id: "17",
    name: "I'm Good (Blue)",
    artist: "David Guetta & Bebe Rexha",
    album: "I'm Good (Blue)",
    duration: "2:55",
    preview_url: "https://example.com/preview17",
  },
  {
    id: "18",
    name: "Calm Down",
    artist: "Rema & Selena Gomez",
    album: "Rave & Roses",
    duration: "3:59",
    preview_url: "https://example.com/preview18",
  },
  {
    id: "19",
    name: "Vampire",
    artist: "Olivia Rodrigo",
    album: "GUTS",
    duration: "3:39",
    preview_url: "https://example.com/preview19",
  },
  {
    id: "20",
    name: "Shivers",
    artist: "Ed Sheeran",
    album: "= (Equals)",
    duration: "3:27",
    preview_url: "https://example.com/preview20",
  },
];

// search
export const searchTracks = (searchQuery) => {
  if (searchQuery.trim() === "") {
    return [];
  }

  return mockSearchResults.filter(
    (track) =>
      track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.album.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export { mockSearchResults };
