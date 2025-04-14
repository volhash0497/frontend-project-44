install: # установить зависимости
	npm ci
	
brain-games: # запустить приложение
	node bin/brain-games.js

brain-even: # запустить приложение
	node bin/brain-even.js

brain-calc: # запустить приложение
	node bin/brain-calc.js


publish: #обновление пакетов 
	npm publish --dry-run

lint: #lint
	npx eslint