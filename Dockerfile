FROM node:17
#working directory
WORKDIR /learning/app
#coping package.json
COPY package*.json ./

RUN npm install prettier -g

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node","build/app.js"]