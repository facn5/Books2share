BEGIN;

DROP TABLE IF EXISTS books;

CREATE TABLE IF NOT EXISTS books(
  book_id SERIAL PRIMARY KEY,
  book_title TEXT NOT NULL,
  publish_year INTEGER,
  amount INTEGER
);

INSERT INTO books(book_title, publish_year, amount) VALUES('title',5555,5);
INSERT INTO books(book_title, publish_year, amount) VALUES('title',5555,5);
INSERT INTO books(book_title, publish_year, amount) VALUES('title',5555,5);
INSERT INTO books(book_title, publish_year, amount) VALUES('title',5555,5);
INSERT INTO books(book_title, publish_year, amount) VALUES('title',5555,5);

COMMIT;
