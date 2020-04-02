up-www:
	docker-compose kill www 
	docker-compose up -d --force-recreate www

up-all: up-www


into-www:
	docker-compose exec www bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .