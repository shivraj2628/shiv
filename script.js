function scrollTrending(scrollOffset) {
    document.querySelector('.trending-now .movie-container').scrollBy({ left: scrollOffset, behavior: 'smooth' });
}

function scrollOnlyOnNetflix(scrollOffset) {
    document.querySelector('.only-on-netflix .movie-container').scrollBy({ left: scrollOffset, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const trendingLeftButton = document.querySelector('.trending-now .scroll-btn.left');
    const trendingRightButton = document.querySelector('.trending-now .scroll-btn.right');
    const netflixLeftButton = document.querySelector('.only-on-netflix .scroll-btn.left');
    const netflixRightButton = document.querySelector('.only-on-netflix .scroll-btn.right');

    trendingLeftButton.addEventListener('click', function() {
        scrollTrending(-300);
    });

    trendingRightButton.addEventListener('click', function() {
        scrollTrending(300);
    });

    netflixLeftButton.addEventListener('click', function() {
        scrollOnlyOnNetflix(-300);
    });

    netflixRightButton.addEventListener('click', function() {
        scrollOnlyOnNetflix(300);
    });

    // Add FAQ dropdown functionality
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', function() {
            faq.classList.toggle('open');
        });
    });
});
