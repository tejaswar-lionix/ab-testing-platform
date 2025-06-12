build:
	docker build -t ab-testing .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
