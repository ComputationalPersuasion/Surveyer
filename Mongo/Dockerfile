FROM alpine

RUN apk --no-cache add mongodb
RUN addgroup -S mongod && adduser -S -G mongod mongod
USER mongod
VOLUME /data/db
EXPOSE 27017
WORKDIR /home/mongod

CMD ["mongod", "--bind_ip", "127.0.0.1", "--port", "27017"]