# catstagram
a silly little social media app themed around cats, but not

## Dev Notes
__2020-01-21__: Initial setup. I coded up most of the server and Dockerfile
while my sister died a slow death of boredom. I guess next time she asks
to "learn to code" we shouldn't start with building a RESTful API in
Docker. Well, I learned a lot though. Dockerfile in catstagram-app works;
there are some scripts in its package.json for various docker commands.
The docker-compose.yml file also works (docker-compose up, docker-compose
down). At the end of the "session", the user is able to
`curl localhost:5000/cat_names` and receive a JSON response.

