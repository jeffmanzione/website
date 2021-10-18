CREATE TABLE Comments (
	message_id SERIAL PRIMARY KEY,
	username VARCHAR ( 50 ) NOT NULL,
	message VARCHAR ( 255 ) NOT NULL,
	created_on TIMESTAMP NOT NULL
);

CREATE TABLE ElectionPredictions (
  state VARCHAR ( 50 ) PRIMARY KEY,
	sample_size INTEGER,
	vote_dem_pp DOUBLE PRECISION,
	vote_rep_pp DOUBLE PRECISION,
	favored_party VARCHAR ( 3 ) NOT NULL,
	diff_pp DOUBLE PRECISION,
	stderr_pp DOUBLE PRECISION,
	simulation_count INTEGER,
	dem_win_pp DOUBLE PRECISION,
	rep_win_pp DOUBLE PRECISION
);