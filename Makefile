db:
	docker exec -it postgres psql -U user -d db_base

pg:
	docker exec -it postgres_container bash

node:
	docker exec -it node_container bash

start:
	docker compose up