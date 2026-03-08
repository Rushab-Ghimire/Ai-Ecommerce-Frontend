FROM node:20-alpine

WORKDIR /app

# Add /app/node_modules/.bin to PATH so we can run commands easily
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files (we will generate these in a moment)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the Vite port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev", "--", "--host"]