FROM node
WORKDIR .
RUN sudo npm install
COPY app.js /var/www/html/ 
EXPOSE 9981
CMD ["node","app.js"]
