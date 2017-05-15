# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
body            | text      | not null, indexed
author_id       | integer   | not null, foreign key (references users), indexed

## answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
author_id       | integer   | not null, foreign key (references users), indexed
question_id     | integer   | not null, foreign key (references questions), indexed, unique [author_id]
