FROM node
WORKDIR /app
COPY app.js /var/www/html/ 
EXPOSE 9981
CMD ["node","app.js"]
