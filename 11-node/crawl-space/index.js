const Crawler = require('crawler');

// Predicate
const isCrawlable = (url) => {
    const terribleSites = ['archive.today', 'ghostarchive.org', 'web.archive.org', 'reactjs.org', 'microsoft.com', 'twitter.com'];

    // magic:
    const terribleSiteDetected = terribleSites.some((awfulSite) => {
        return url.includes(awfulSite);
    });
    return !terribleSiteDetected;

    // 1 liner: heavy magic:
    // return ! terribleSites.some( awfulSite => url.includes(awfulSite) );
};

const c = new Crawler({
   rateLimit: 1000,
   userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:108.0) Gecko/20100101 Firefox/108.0", 
   callback: (err, res, done) => {

        if (typeof res.$ === 'function') {
            console.log(res.request.uri.href);
            const title = res.$('title').text();
            console.log(title);
            console.log(); // blank line for readability
    
            const $links = res.$('a[href^=http]'); // external links only, please
            $links.each(function () {
                const href = res.$(this).attr('href');
                if (isCrawlable(href)) {
                    c.queue(href);
                }
            });
        }

        done(); // this needs to be called everytime callback runs
   }
});

// process.argv contains command line arguments (and some other crap)
c.queue(process.argv[2] || 'https://lobste.rs/');
