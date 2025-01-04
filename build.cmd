esbuild ./src/main.ts --bundle --minify --outdir=dist --target=chrome91
xcopy /Y manifest.json dist\
xcopy /Y preview.png dist\