app: clean install build

install:
	@npm install

clean:
	@rm -rf node_modules
	@rm -rf dist

build:
	@npm run build:prod
