--place to work on schema commands to create db tables


CREATE SCHEMA watchst;

CREATE TABLE watchst.users (
  "_id" SERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "netflix" boolean NOT NULL,
  "hulu" boolean NOT NULL,
  "amazon" boolean NOT NULL
);

CREATE TABLE watchst.watchlist (
  "_id" SERIAL PRIMARY KEY,
  "movie_title" varchar NOT NULL,
  "user_id" int REFERENCES watchst.users (_id) NOT NULL, 
  "netflix" boolean NOT NULL,
  "hulu" boolean NOT NULL,
  "amazon" boolean NOT NULL
);


-- ALTER TABLE watchrschema.users ADD FOREIGN KEY ("user_id") REFERENCES watchrschema.users ("_id");

-- ALTER TABLE watchrschema.usersmovies ADD FOREIGN KEY ("moviename") REFERENCES watchrschema.movies ("moviename");


-- SET search_path TO watchrschema,public;

