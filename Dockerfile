from node:7
copy . /app
workdir /app
run npm install
# entrypoint ["npm", "run"] # Doesn't work on Runnable right now.
cmd ["npm", "start"]
