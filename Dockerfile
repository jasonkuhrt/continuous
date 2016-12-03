from node:7-alpine
label name=continuous
copy . /app
workdir /app
run npm install
entrypoint ["npm", "run"]
cmd ["start"]
