const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// File paths
const paths = {
  scss: {
    src: "src/assets/styles/*.scss",
    dest: "dist/css"
  }
};

// Compile SCSS
function compileSCSS() {
  return gulp
    .src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scss.dest));
}

// Watch files
function watchFiles() {
  gulp.watch(paths.scss.src, compileSCSS);
}

// Define tasks
exports.default = gulp.series(compileSCSS, watchFiles);
exports.build = compileSCSS;
