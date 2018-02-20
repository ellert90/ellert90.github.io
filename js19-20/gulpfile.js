var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    cache       = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');
		const babel = require('gulp-babel');



gulp.task('sass', function(){
    return gulp.src('app/sass/src/**/*.+(scss|sass)')
				.pipe(concat('main.sсss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
				.pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

//BROWSER SYNC

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

//CSS LIBS

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

//WATCH

gulp.task('watch', ['browser-sync', 'sass', 'combine'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
		gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', ['combine']);
});

//BOWER

gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

//CONCAT AND uglify

gulp.task('combine', function() {
    return gulp.src('app/js/src/**/*.js')
        .pipe(concat('script.js', {newLine: ';'}))
        .pipe(gulp.dest('app/js'))
				.pipe(browserSync.reload({stream: true}))
});

gulp.task('uglify', function() {
	return gulp.src('app/js/src/**/*.js')
			.pipe(uglify('script.js'))
			.pipe(gulp.dest('app/js'));
})

//BABEL

gulp.task('convert', () => {
    return gulp.src('src/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});


//CLEAN

gulp.task('clean', function() {
    return del.sync('dist');
});

//IMG

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

//BUILD

gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'combine', 'uglify'], function() {

    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
        ])

		.pipe(cssnano())
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);

gulp.task('clear', function () {
    return cache.clearAll();
})
