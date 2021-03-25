# Step 1
FROM mhart/alpine-node:14.16.0 as build-step

WORKDIR /client

COPY package*.json /client

RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . /client

RUN npm run build

CMD ["npm", "server"]

# # Use a lighter version of Node as a parent image
# FROM mhart/alpine-node:14.16.0
# # Set the working directory to /client
# WORKDIR /client
# # copy package.json into the container at /client
# COPY package*.json /client/
# # install dependencies
# RUN npm install
# # Copy the current directory contents into the container at /client
# COPY . /client/
# # Make port 3000 available to the world outside this container
# EXPOSE 3000
# # Run the app when the container launches
# CMD ["npm", "start"]