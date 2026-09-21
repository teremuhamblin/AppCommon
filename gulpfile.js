import gulp from "gulp";
import clean from "gulp-clean";
import concat from "gulp-concat";
import terser from "gulp-terser";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";

const paths = {
  src: "src/**/*",
  dist: "dist/"
};

gulp.task("clean", () => {
  return gulp.src(paths.dist, { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task("html", () => {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("js", () => {
  return gulp
    .src("src/**/*.js")
    .pipe(concat("app.js"))
    .pipe(terser())
    .pipe(gulp.dest("dist/core"));
});

gulp.task("css", () => {
  return gulp
    .src("src/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/ui"));
});

gulp.task("assets", () => {
  return gulp.src("src/assets/**/*").pipe(gulp.dest("dist/assets"));
});

gulp.task("build", gulp.series("clean", "html", "js", "css", "assets"));

gulp.task("dev", () => {
  gulp.watch(paths.src, gulp.series("build"));
});
