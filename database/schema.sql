DROP DATABASE IF EXISTS SALplayer_DB;
CREATE database SALplayer_DB;
USE SALplayer_DB;

CREATE TABLE players (
  item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  playerfirst_name VARCHAR(100) NOT NULL,
  playerlast_name VARCHAR(100) NOT NULL,
  num_wins INT NULL,
  num_loses INT NULL,
  team_name VARCHAR(100) NOT NULL
);
CREATE TABLE fortnite (
  player_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  playerfirst_name VARCHAR(100) NOT NULL,
  playerlast_name VARCHAR(100) NOT NULL,
  num_wins INT NULL,
  num_loses INT NULL,
  team_name VARCHAR(100) NOT NULL,
  item_id INT NOT NULL,
  FOREIGN KEY (item_id)
	REFERENCES players(item_id)
	ON DELETE CASCADE
);
CREATE TABLE apex (
   player_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  playerfirst_name VARCHAR(100) NOT NULL,
  playerlast_name VARCHAR(100) NOT NULL,
  num_wins INT NULL,
  num_loses INT NULL,
  team_name VARCHAR(100) NOT NULL,
  item_id INT NOT NULL,
  FOREIGN KEY (item_id)
	REFERENCES players(item_id)
	ON DELETE CASCADE
);
CREATE TABLE rocket_league (
   player_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  playerfirst_name VARCHAR(100) NOT NULL,
  playerlast_name VARCHAR(100) NOT NULL,
  num_wins INT NULL,
  num_loses INT NULL,
  team_name VARCHAR(100) NOT NULL,
  FOREIGN KEY (item_id)
	REFERENCES players (item_id)
	ON DELETE CASCADE
);
CREATE TABLE nba_2k (
   player_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  playerfirst_name VARCHAR(100) NOT NULL,
  playerlast_name VARCHAR(100) NOT NULL,
  num_wins INT NULL,
  num_loses INT NULL,
  team_name VARCHAR(100) NOT NULL,
 item_id INT NOT NULL,
  FOREIGN KEY (item_id)
	REFERENCES players(item_id)
	ON DELETE CASCADE
);