-- place to work on schema commands to create db tables


CREATE SCHEMA "watchr";

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE watchr.users (
  "id" SMALLSERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "netflix" boolean NOT NULL,
  "hulu" boolean NOT NULL,
  "amazon" boolean NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE watchr.amazon (
  "id" SMALLSERIAL PRIMARY KEY,
  "movieName" varchar NOT NULL,
  "img" varchar NOT NULL,
  "streamingInfo" varchar NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE watchr.hulu (
  "id" SMALLSERIAL PRIMARY KEY,
  "movieName" varchar NOT NULL,
  "img" varchar NOT NULL,
  "streamingInfo" varchar NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE watchr.netflix (
  "id" SMALLSERIAL PRIMARY KEY,
  "movieName" varchar NOT NULL,
  "img" varchar NOT NULL,
  "streamingInfo" varchar NOT NULL
) WITH (
  OIDS=FALSE
);

-- CREATE TABLE watchr.usersmovies (
--   "_id" serial NOT NULL
-- );

-- ALTER TABLE watchr.usersmovies ADD FOREIGN KEY ("username") REFERENCES watchrschema.users ("username");

-- ALTER TABLE watchr.usersmovies ADD FOREIGN KEY ("moviename") REFERENCES watchrschema.movies ("moviename");

-- SET search_path TO watchrschema,public;

