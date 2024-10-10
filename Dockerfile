FROM node:18-alpine
RUN mkdir -p ./ruvnp
WORKDIR ./ruvnp
COPY ./ruvnp ./
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]