install: # установить зависимости
	npm ci
	
brain-games: # запустить приложение
	node bin/brain-games.js

publish: #обновление пакетов 
	npm publish --dry-run

lint: #lint
	npx eslint