const fs = require('fs');
const sass = require('node-sass');

const filePathWoExt = './play-music.user';

sass.render({ file: `./${filePathWoExt}.scss`, outputStyle: 'compact' }, (err, res) => {
   if (err) {
      console.error(err);
   } else {
      fs.writeFile(filePathWoExt + '.css', res.css, (err) => {
         if (err) {
            console.error(err);
         } else {
            console.log(`File "${filePathWoExt}.scss"\tsuccessfully compiled to "${filePathWoExt}.css"`)
         }
      });
   }
});
