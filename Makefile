up:
	docker-compose kill next-blog 
	docker-compose up -d --force-recreate next-blog

install:
	docker-compose run --rm next-blog "npm install" 

clean:
	rm -fr $(PWD)/next-blog/public

build: clean
	docker-compose run --rm next-blog 'npm run build'

publish:
	./scripts/publi.sh

into:
	docker-compose exec next-blog bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
