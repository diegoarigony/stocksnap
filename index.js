var Nightmare = require('nightmare');

new Nightmare()
  .viewport(1000, 1000)
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  // .goto('http://google.com')
  .wait()
  .screenshot('google.png')
  .type('#main_search', 'brazil')
  .click('.main_search button[type="submit"]')
  // .screenshot('google.png')
  .url(function(link) {
    console.log(link);
  })
  .run(function(err, nightmare){
    if (err) {
      console.log(err);
    }
    console.log('Done!')
  });