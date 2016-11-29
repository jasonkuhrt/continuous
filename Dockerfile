from node:7-alpine
copy . /app
workdir /app
run npm install
entrypoint ["npm", "run"]
cmd ["start"]
