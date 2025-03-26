install: # установить зависимости
	npm ci
	
brain-games: # запустить приложение
	node bin/brain-games.js

brain-even: # запустить приложение
	node bin/brain-even.js


publish: #обновление пакетов 
	npm publish --dry-run

lint: #lint
	npx eslint