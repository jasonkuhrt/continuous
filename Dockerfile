from node:7-alpine

# Use dumb-init so that our node app does not have to take on PID 1
# init system responsibilities. To install via wget we need certificates
# installed temporarially. References:
#
# https://github.com/Yelp/dumb-init
# https://github.com/gliderlabs/docker-alpine/issues/218

arg DUMB_INIT_VERSION=1.2.0
run apk add --no-cache --virtual .bootstrap-deps wget ca-certificates \
    && wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 \
    && chmod +x /usr/local/bin/dumb-init \
    && apk del .bootstrap-deps

# Hack to try and make circleci work
run mkdir -p /source
workdir /source

copy package.json .
run npm install

copy . .
run npm run build

label name=continuous

entrypoint ["dumb-init", "--"]
cmd ["npm", "run", "start"]
