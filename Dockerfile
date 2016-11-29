from node:7
copy . /app
workdir /app
run npm install
entrypoint ["npm", "run"]
cmd ["start"]
