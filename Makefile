SVC=frperezr/microservices-demo-gateway-api
VERSION := $$(cat package.json | grep version | sed 's/"/ /g' | awk {'print $$3'})

build b:
	@echo "[build] Building service..."
	@npm run build

run r:
	@echo "[running] Running service..."
	@npm start

docker d:
	@echo "[docker] Building image..."
	@docker build -t $(SVC):$(VERSION) .

docker-login dl:
	@echo "[docker] Login to docker..."
	@$$(aws ecr get-login --no-include-email)

push p: docker
	@echo "[docker] pushing $(SVC):$(VERSION)"
	@docker tag $(SVC):$(VERSION) $(SVC):$(VERSION)
	@docker push $(SVC):$(VERSION)

.PHONY: build run docker