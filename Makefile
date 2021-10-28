up:
	docker-compose kill www 
	docker-compose up -d --force-recreate www

install:
	docker-compose run --rm www "npm install" 

clean:
	rm -fr $(PWD)/www/public

build: clean
	docker-compose run --rm www 'npm run build'

.ONESHELL:
publish:
	cd $(PWD)/www/public
	pwd
	git init
	git checkout -b gh-pages
	git add .
	git commit -m "🚀 release $$(date '+%6FT%T%z')"
	git remote add origin git@github.com:luke10x/luke10x.github.io.git
	git log
	pwd
	git push origin gh-pages -f

into:
	docker-compose exec www bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
