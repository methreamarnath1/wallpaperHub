document.addEventListener('DOMContentLoaded', () => {
    const wallpapersGrid = document.getElementById('wallpapersGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const loader = document.getElementById('loader');
    let currentQuery = '';
    let currentPage = 1;

    const apiKey = 'pUbvjrLIa4Ps4pOnq1sKuTFlTVZwdhYcUZNGHtyTlaP8XNANpKT5Mm5p';
    const baseUrl = 'https://api.pexels.com/v1/';

    async function fetchWallpapers(query = '', page = 1) {
        showLoader();
        const url = query
            ? `${baseUrl}search?query=${query}&page=${page}&per_page=10`
            : `${baseUrl}curated?page=${page}&per_page=10`;

        try {
            const response = await fetch(url, {
                headers: { Authorization: apiKey }
            });
            const data = await response.json();
            hideLoader();
            return data.photos || [];
        } catch (error) {
            console.error('Error fetching wallpapers:', error);
            hideLoader();
            return [];
        }
    }

    async function loadWallpapers(query = '', page = 1, clearGrid = false) {
        const wallpapers = await fetchWallpapers(query, page);
        if (clearGrid) wallpapersGrid.innerHTML = '';
        wallpapers.forEach(wallpaper => wallpapersGrid.insertAdjacentHTML('beforeend', createWallpaperCard(wallpaper)));
    }

    function showLoader() {
        loader.style.display = 'block';
    }

    function hideLoader() {
        loader.style.display = 'none';
    }

    function createWallpaperCard(wallpaper) {
        return `
            <div class="wallpaper-card">
                <img 
                    src="${wallpaper.src.medium}" 
                    alt="${wallpaper.photographer}"
                    class="wallpaper-img"
                    loading="lazy"
                >
                <div class="wallpaper-info">
                    <h3 class="wallpaper-title">${wallpaper.photographer}</h3>
                    <button class="download-btn" onclick="downloadWallpaper('${wallpaper.src.original}', 'Wallpaper')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download
                    </button>
                </div>
            </div>
        `;
    }

    function searchWallpapers() {
        currentQuery = searchInput.value.trim();
        currentPage = 1;
        loadWallpapers(currentQuery, currentPage, true);
    }

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchWallpapers();
        }
    });

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load More';
    loadMoreButton.classList.add('load-more-btn');
    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadWallpapers(currentQuery, currentPage);
    });
    document.body.appendChild(loadMoreButton);

    // Initial load of random images
    loadWallpapers();

    // Add search icon functionality
    const searchIcon = document.createElement('span');
    searchIcon.classList.add('search-icon');
    searchIcon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    `;
    searchInput.parentElement.insertBefore(searchIcon, searchInput);

    // Global function for downloading wallpapers
    window.downloadWallpaper = function(url, title) {
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
});
