FROM node:9

RUN npm install -g ionic@3.9.2
RUN apt-get update
RUN apt-get install vim -y

EXPOSE 8100

CMD ["sh", "/code/init.sh"]