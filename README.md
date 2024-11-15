# WallpaperHub

WallpaperHub is a simple and elegant web application that allows users to search for high-quality wallpapers across various categories. With the ability to view, download, and explore trending images, WallpaperHub provides a seamless experience for finding the perfect wallpaper for any device.

![WallpaperHub Demo](wallpaperHubPic.png) <!-- Replace this with the actual path or URL to your screenshot image -->

## Features

- **Random Wallpapers on Load**: Automatically displays random trending wallpapers on page load.
- **Search Functionality**: Search for wallpapers by keywords to quickly find images that match specific themes or styles.
- **Category Filter**: Option to filter wallpapers by category (if available).
- **Load More Button**: After an initial set of results, users can click "Load More" to fetch additional wallpapers.
- **Download Wallpapers**: Easily download any wallpaper by clicking the "Download" button.
- **Responsive Design**: Optimized for various screen sizes and devices for a seamless browsing experience.

## How We Made It

This project is built using:

- **HTML/CSS** for structuring and styling the application.
- **JavaScript** for interactivity and API calls.
- **Pexels API** to fetch high-quality images and provide wallpaper search functionality.

### API Integration

The Pexels API is used to search for images and curate popular wallpapers. The app makes asynchronous requests to the API to fetch images based on user input or to display random curated images on page load.

### Purpose

The purpose of this app is to provide users with a quick, user-friendly tool to explore and download stunning wallpapers, allowing users to easily personalize their devices with beautiful images.

## Getting Started

### Prerequisites

You will need to have a recent version of any modern web browser to run this app locally. Also, ensure you have an active internet connection to connect to the Pexels API.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/methreamarnath1/wallpaperHub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd wallpaperhub
   ```
3. Open the `index.html` file in your browser:

   ```bash
   open index.html
   ```

   Alternatively, if you’re running a local server (e.g., using VS Code Live Server or a tool like Python's SimpleHTTPServer), launch it to view the app on `localhost`.

4. **Environment Variables**: Make sure to add your own [Pexels API key](https://www.pexels.com/api/) in the `app.js` file to enable API requests.

## Usage

1. **View Random Wallpapers**: On page load, the app displays a set of trending wallpapers.
2. **Search for Wallpapers**: Type a keyword in the search bar and press "Enter" or click the search icon to load images based on the entered query.
3. **Load More Images**: Scroll down and click the "Load More" button to fetch additional images related to the current query or random results if no query is specified.
4. **Download Images**: Click the "Download" button on any wallpaper to save it to your device.

## Contributing

Contributions are welcome! If you’d like to improve the app, feel free to fork the repository and make pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to [Pexels](https://www.pexels.com) for providing access to high-quality images through their API.

---

Enjoy using **WallpaperHub** to explore and download beautiful wallpapers!

```

**Notes:**
- Replace the `![WallpaperHub Demo](demo.png)` line with the actual image path or URL once you have a screenshot.
- Update the GitHub URL in `git clone https://github.com/methreamarnath1/wallpaperHub.git` to match your actual repository URL.
```
