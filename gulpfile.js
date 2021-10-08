const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done){
    //compile sass
    // indentificar archivo, compilar, save .css
    src('src/app.scss')
    //.pipe( sass({outputStyle:'expanded'}) )
    .pipe( sass() )
    .pipe( postcss([ autoprefixer() ]) )
    .pipe( dest('build/css') );
    done();
}

function dev() {
    watch('src/**/*.scss', css);
    watch('src/app.scss', css);
}

exports.css     = css;
exports.dev     = dev;
exports.default = series(css, dev);  //parallel or series