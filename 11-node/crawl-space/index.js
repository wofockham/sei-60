const Crawler = require('crawler');

const c = new Crawler({
   rateLimit: 1000,
   userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:108.0) Gecko/20100101 Firefox/108.0", 
   callback: (err, res, done) => {
  
        console.log(res.request.uri.href);
        const title = res.$('title').text();
        console.log(title);
        console.log(); // blank line for readability

        const $links = res.$('a[href^=http]'); // external links only, please
        $links.each(function () {
            const href = res.$(this).attr('href');
            c.queue(href);
        });

        done(); // this needs to be called everytime callback runs
   }
});

c.queue('https://lobste.rs/');