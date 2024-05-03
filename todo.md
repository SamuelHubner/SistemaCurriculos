# docker environment:
    login:
        + POSTGRES_USER=microndev
        + POSTGRES_PASSWORD=microndb123
        + POSTGRES_DB=micron_dev
    ports:
        + postgre = 5423:5423
        + front_end = 3000:3000
        + backend = 8000:8000

# TODO:
 kill previous images and build new fixing:
    something with host
