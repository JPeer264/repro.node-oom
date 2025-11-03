# instructions

- start container: `docker-compose up --build`
- run stresstest: `npx loadtest -n 10 -c 5 http://localhost:3000/api/data` (-n for max requests, -c for concurrency)
