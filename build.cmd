esbuild ./src/main.ts ./src/startup_script.ts --bundle --minify --outdir=dist --target=chrome91
xcopy /Y manifest.json dist\
xcopy /Y preview.png dist\