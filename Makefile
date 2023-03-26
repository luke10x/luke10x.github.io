up:
	docker-compose kill next-blog 
	docker-compose up -d --force-recreate next-blog

install:
	docker-compose run --rm next-blog "npm install" 

clean:
	rm -fr $(PWD)/next-blog/out
	rm -fr $(PWD)/next-blog/.next

build: clean
	docker-compose run --rm next-blog 'npm run build'
	docker-compose run --rm next-blog 'npm run export'

publish:
	./scripts/publi.sh

into:
	docker-compose exec next-blog bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
