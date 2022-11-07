FROM node
WORKDIR /app
COPY app.js /var/www/html/ 
RUN npm install
EXPOSE 9981
CMD ["node","app.js"]
