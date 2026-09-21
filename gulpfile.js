// AppCommon v1.1 — Gulp Build System Minimal & Modulaire

import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import gulpAutoPrefixer from 'gulp-autoprefixer';
import gulpEslint from 'gulp-eslint-new';
import gulpHeader from 'gulp-header';
import gulpRename from 'gulp-rename';
import archiver from 'archiver';
import { globSync } from 'glob';
import { deleteSync } from 'del';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

// Dossiers AppCommon v1.1
const dirs = {
  src: 'src',
  dist: 'dist',
  archive: 'archive'
};

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

// Créer le dossier archive/
gulp.task('archive:create_dir', done => {
  if (!fs.existsSync(dirs.archive)) {
    fs.mkdirSync(path.resolve(dirs.archive), '0755');
  }
  done();
});

// Créer un ZIP de dist/
gulp.task('archive:zip', done => {
  const archiveName = path.resolve(
    dirs.archive,
    `${pkg.name}_v${pkg.version}.zip`
  );

  const zip = archiver('zip');
  const output = fs.createWriteStream(archiveName);

  const files = globSync('**/*.*', {
    cwd: dirs.dist,
    ignore: ['**/node_modules/**', '**/.cache/**'],
    dot: true
  });

  zip.on('error', error => {
    done();
    throw error;
  });

  output.on('close', done);

  files.forEach(file => {
    const filePath = path.resolve(dirs.dist, file);
    zip.append(fs.createReadStream(filePath), {
      name: file,
      mode: fs.statSync(filePath).mode
    });
  });

  zip.pipe(output);
  zip.finalize();
});

// Nettoyer dist/ et archive/
gulp.task('clean', done => {
  deleteSync([dirs.dist, dirs.archive]);
  done();
});

// ---------------------------------------------------------------------
// | Copy tasks (AppCommon v1.1)                                       |
// ---------------------------------------------------------------------

// Copier index.html
gulp.task('copy:index', () =>
  gulp.src(`${dirs.src}/index.html`).pipe(gulp.dest(dirs.dist))
);

// Copier LICENSE
gulp.task('copy:license', () =>
  gulp.src('LICENSE').pipe(gulp.dest(dirs.dist))
);

// Copier CSS (UI core + thèmes + composants)
gulp.task('copy:css', () => {
  const banner = `/*! AppCommon v${pkg.version} | ${pkg.license} */\n\n`;

  return gulp
    .src([
      `${dirs.src}/ui/**/*.css`,
      `!${dirs.src}/ui/themes/**/*.css` // thèmes copiés séparément
    ])
    .pipe(gulpHeader(banner))
    .pipe(gulpAutoPrefixer({ cascade: false }))
    .pipe(gulp.dest(`${dirs.dist}/ui`));
});

// Copier thèmes UI
gulp.task('copy:themes', () =>
  gulp.src(`${dirs.src}/ui/themes/**/*.css`).pipe(gulp.dest(`${dirs.dist}/ui/themes`))
);

// Copier JS (core + modules + ui)
gulp.task('copy:js', () =>
  gulp
    .src([
      `${dirs.src}/core/**/*.js`,
      `${dirs.src}/modules/**/*.js`,
      `${dirs.src}/ui/**/*.js`
    ])
    .pipe(gulp.dest(`${dirs.dist}`))
);

// Copier assets
gulp.task('copy:assets', () =>
  gulp.src(`${dirs.src}/assets/**/*`).pipe(gulp.dest(`${dirs.dist}/assets`))
);

// Copier tout le reste
gulp.task('copy:misc', () =>
  gulp
    .src(
      [
        `${dirs.src}/**/*`,
        `!${dirs.src}/index.html`,
        `!${dirs.src}/ui/**/*.css`,
        `!${dirs.src}/ui/**/*.js`,
        `!${dirs.src}/core/**/*.js`,
        `!${dirs.src}/modules/**/*.js`,
        `!${dirs.src}/assets/**/*`,
        '!**/.DS_Store'
      ],
      { dot: true }
    )
    .pipe(gulp.dest(dirs.dist))
);

// ---------------------------------------------------------------------
// | Lint (AppCommon v1.1)                                             |
// ---------------------------------------------------------------------

gulp.task('lint:js', () =>
  gulp
    .src([
      `${dirs.src}/core/**/*.js`,
      `${dirs.src}/modules/**/*.js`,
      `${dirs.src}/ui/**/*.js`
    ])
    .pipe(gulpEslint())
    .pipe(gulpEslint.failOnError())
);

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task(
  'copy',
  gulp.series(
    'copy:index',
    'copy:license',
    'copy:css',
    'copy:themes',
    'copy:js',
    'copy:assets',
    'copy:misc'
  )
);

gulp.task('build', gulp.series(gulp.parallel('clean', 'lint:js'), 'copy'));

gulp.task(
  'archive',
  gulp.series('build', 'archive:create_dir', 'archive:zip')
);

gulp.task('default', gulp.series('build'));
