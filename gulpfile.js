var gulp = require("gulp"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify");

//task css

gulp.task("css", function () {
  return gulp
    .src(["src/css/**/*.css", "src/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

//task html

gulp.task("html", function () {
  return gulp
    .src("src/html/**/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});

//task javascript

gulp.task("javascript", function () {
  return gulp
    .src("src/javascript/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

// watch task

gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("src/html/**/*.html", gulp.series("html"));
  gulp.watch(["src/css/**/*.css", "src/css/**/*.scss"], gulp.series("css"));
  gulp.watch("src/javascript/*.js", gulp.series("javascript"));
});
