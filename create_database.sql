CREATE TABLE Comments (
	message_id SERIAL PRIMARY KEY,
	username VARCHAR ( 50 ) NOT NULL,
	message VARCHAR ( 255 ) NOT NULL,
	created_on TIMESTAMP NOT NULL
);