FROM node:20-alpine AS ANGULAR_BUILD
RUN npm install -g @angular/cli
COPY frontend /frontend
WORKDIR /frontend
RUN npm install
RUN ng build

FROM golang:1.21.6-alpine AS GO_BUILD
COPY backend /backend
WORKDIR /backend
ENV CGO_ENABLED=1
RUN apk add --no-cache gcc musl-dev
RUN go build -ldflags='-s -w -extldflags "-static"' -o /go/bin/api

FROM alpine:3
WORKDIR /app
COPY --from=ANGULAR_BUILD /frontend/dist/* ./webapp/
COPY --from=GO_BUILD /go/bin/api ./

CMD ./api