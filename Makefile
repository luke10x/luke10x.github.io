up:
	docker-compose kill www 
	docker-compose up -d --force-recreate www

install:
	docker-compose run --rm www "npm install" 

clean:
	rm -fr $(PWD)/www/public

build: clean
	docker-compose run --rm www 'npm run build'

publish:
	./scripts/publi.sh

into:
	docker-compose exec www bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
