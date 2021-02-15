up:
	docker-compose kill www 
	docker-compose up -d --force-recreate www

install:
	docker-compose run --rm www "npm install" 

build:
	docker-compose run --rm www 'npm run build'
	rm -fr $(PWD)/docs
	cp -vr www/public $(PWD)/docs

.ONESHELL:
publish:
	cd docs
	pwd
	git init
	git checkout -b master
	git add .
	git commit -m "🚀 release $$(date '+%6FT%T%z')"
	git remote add origin git@github.com:luke10x/luke10x.github.io.git
	git log
	pwd
	git push origin master -f

into:
	docker-compose exec www bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .