const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const notify = require("gulp-notify");

const css = () => {
  return src('./src/styles/**/*.scss')
  .pipe(concat('styles.scss'))
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(dest('./dist/styles/'))
  .pipe(browserSync.stream());
};

const scripts = () => {
  return src([
    // './src/vendor/swiper.js',
    // './node_modules/choices.js/public/assets/scripts/choices.js',  // пробовал установить и достать отсюда не получается
    'src/*.js'
  ])
    .pipe(concat('index.js'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('./dist'))
    .pipe(browserSync.stream())
};

const html = () => {
  return src('./src/*.html')
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
};

const resources = () => {
  return src('./src/public/**')
    .pipe(dest('./dist/public'))
};


watch('./src/styles/*.scss', { events: 'all' }, css);
watch('./src/public', { events: 'all' }, resources);
watch('./src/*.html', { events: 'all' }, html);

exports.default = series(resources, css, html, scripts, watchFiles);
