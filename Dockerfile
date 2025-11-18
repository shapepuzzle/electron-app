FROM  electronuserland/builder:wine

WORKDIR /project

COPY forge.config.js main.js package.json package-lock.json ./
COPY ./build ./build
COPY ./app ./app

RUN npm install

CMD ["electron-builder", "-wl"]
