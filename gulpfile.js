var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass");

gulp.task("styles", function(){
	gulp.src("src/stylesheets/styles.scss")
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest("build/stylesheets"));
});

gulp.task("javascript", function(){
	gulp.src("src/javascripts/*.js")
		.pipe(gulp.dest("build/javascripts"));
});

gulp.task("watch", function(){
	gulp.watch("src/stylesheets/*.scss", ["styles"]);
	gulp.watch("src/javascripts/*.js", ["javascript"]);
});