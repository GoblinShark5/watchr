// place to work on schema commands to create db tables


CREATE SCHEMA "watchrschema";

CREATE TABLE watchrschema.users (
  "id" SMALLSERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "netflix" boolean NOT NULL,
  "hulu" boolean NOT NULL,
  "amazon" boolean NOT NULL,
);

CREATE TABLE watchrschema.amazon (
  "id" SMALLSERIAL PRIMARY KEY,
  "movieName" varchar NOT NULL,
  "img" varchar NOT NULL,
  "streamingInfo" varchar NOT NULL,
);

CREATE TABLE watchrschema.hulu (
  "id" SMALLSERIAL PRIMARY KEY,
  "movieName" varchar NOT NULL,
  "img" varchar NOT NULL,
  "streamingInfo" varchar NOT NULL,
);

CREATE TABLE watchrschema.netflix (
  "id" SMALLSERIAL PRIMARY KEY,
  "movieName" varchar NOT NULL,
  "img" varchar NOT NULL,
  "streamingInfo" varchar NOT NULL,
);

-- CREATE TABLE watchrschema.users (
--   "username" varchar PRIMARY KEY,
--   "email" varchar NOT NULL,
--   "password" varchar NOT NULL,
--   "amazon" boolean NOT NULL DEFAULT false,
--   "netflix" boolean NOT NULL DEFAULT false,
--   "hulu" boolean NOT NULL DEFAULT false
-- );

-- CREATE TABLE watchrschema.usersmovies (
--   "username" varchar,
--   "moviename" varchar,
--   PRIMARY KEY ("username", "moviename")
-- );

-- CREATE TABLE watchrschema.movies (
--   "moviename" varchar PRIMARY KEY,
--   "description" varchar NOT NULL,
--   "amazon" boolean NOT NULL DEFAULT false,
--   "netflix" boolean NOT NULL DEFAULT false,
--   "hulu" boolean NOT NULL DEFAULT false
-- );

-- ALTER TABLE watchrschema.usersmovies ADD FOREIGN KEY ("username") REFERENCES watchrschema.users ("username");

-- ALTER TABLE watchrschema.usersmovies ADD FOREIGN KEY ("moviename") REFERENCES watchrschema.movies ("moviename");


-- SET search_path TO watchrschema,public;

