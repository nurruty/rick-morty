# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:14.16.0
# Set the working directory to /api
WORKDIR /api
# add `/app/node_modules/.bin` to $PATH
ENV PATH /api/node_modules/.bin:$PATH
# copy package.json into the container at /api
COPY package*.json /api/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . /api/
# Make port 80 available to the world outside this container
EXPOSE 80
# Run the app when the container launches
CMD ["npm", "start"]