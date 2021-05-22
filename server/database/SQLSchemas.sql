// place to work on schema commands to create db tables


CREATE SCHEMA "watchrschema";

CREATE TABLE watchrschema.users (
  "username" varchar PRIMARY KEY,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "amazon" boolean NOT NULL DEFAULT false,
  "netflix" boolean NOT NULL DEFAULT false,
  "hulu" boolean NOT NULL DEFAULT false
);

CREATE TABLE watchrschema.usersmovies (
  "username" varchar,
  "moviename" varchar,
  PRIMARY KEY ("username", "moviename")
);

CREATE TABLE watchrschema.movies (
  "moviename" varchar PRIMARY KEY,
  "description" varchar NOT NULL,
  "amazon" boolean NOT NULL DEFAULT false,
  "netflix" boolean NOT NULL DEFAULT false,
  "hulu" boolean NOT NULL DEFAULT false
);

ALTER TABLE watchrschema.usersmovies ADD FOREIGN KEY ("username") REFERENCES watchrschema.users ("username");

ALTER TABLE watchrschema.usersmovies ADD FOREIGN KEY ("moviename") REFERENCES watchrschema.movies ("moviename");
)

SET search_path TO watchrschema,public;

