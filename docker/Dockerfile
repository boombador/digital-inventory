FROM node:12.14.1-stretch

WORKDIR /root

# Ensures node_modules layer is only rebuilt when package files are updated
# TODO: add "package-lock.json"
COPY ["package.json", "/root"]
RUN ["npm", "install"]

COPY ["webpack.config.js", "/root/"]
CMD ["npm", "start"]

EXPOSE 9000
