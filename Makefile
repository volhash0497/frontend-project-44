install: # установить зависимости
	npm ci
	
brain-games: # запустить приложение
	node bin/brain-games.js

brain-even: # запустить приложение
	node bin/brain-even.js

brain-calc: # запустить приложение
	node bin/brain-calc.js

brain-gcd: # запустить приложение
	node bin/brain-gcd.js

brain-progression: # запустить приложение
	node bin/brain-progression.js

brain-prime: # запустить приложение
	node bin/brain-prime.js

publish: #обновление пакетов 
	npm publish --dry-run

lint: #lint
	npx eslint