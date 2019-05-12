var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "dderrickmatheww",

    // Your password
    password: "Blind5656!",
    database: "SALplayer_DB"
});

connection.connect(function (err) {

    if (err) throw err;
    questions();
});



function questions() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What do you want to do?",
                choices: ["Add a win", "Add a lose", "Add a player", "Delete a player", "Run report", "Exit"],
                name: "actions"
            }

        ]).then(function (answer) {
            switch (answer.actions) {
                case "Add a win":
                    addWin();
                    break;

                case "Add a lose":
                    addLose()
                    break;

                case "Add a player":
                    addPlayer()
                    break;

                case "Delete a player":
                    deletePlayer()
                    break;

                case "Run report":
                    totalPlayers()
                    break;

                case "Exit":
                    exit()
                    break;
            }
        })
}

function totalPlayers() {
    var query = "SELECT * FROM players";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log('\n\n')
        console.table(res);
        console.log('\n\n')
        questions()
    })
}

function addWin() {
    var query = "SELECT * FROM players";
    connection.query(query, function (err, res) {
        if (err) console.log(err);
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What team does the player play for?",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].team_name);
                        }
                        return choiceArray;
                    },
                    name: "player_team"
                }

            ]).then(function (answer) {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "What player are you trying to increase wins for?",
                            choices: function () {
                                var choiceArray = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].team_name === answer.player_team) {
                                        choiceArray.push(res[i].playerlast_name);
                                    }
                                }
                                return choiceArray;
                            },

                            name: "playerlast_name"
                        },
                        {
                            type: "number",
                            message: "How many wins do you want to add? Use negative numbers to subtract wins",
                            name: "wins"
                        }
                    ]).then(function (answer) {
                        var chosenItem;
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].playerlast_name === answer.playerlast_name) {
                                chosenItem = res[i];
                            }
                        }
                        connection.query(
                            "UPDATE players SET ? WHERE ?",
                            [
                                {
                                    num_wins: chosenItem.num_wins + parseInt(answer.wins)
                                },
                                {
                                    playerlast_name: answer.playerlast_name
                                }
                            ],
                            function (error) {
                                if (error) throw err;
                                console.log('\n\n')
                                console.log(chosenItem.playerlast_name + "'s wins are now updated")
                                console.log('\n\n')
                                questions()
                            }

                        );

                    })
            })
    })

}

function addLose() {
    var query = "SELECT * FROM players";
    connection.query(query, function (err, res) {
        if (err) console.log(err);
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What team does the player play for?",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].team_name);
                        }
                        return choiceArray;
                    },
                    name: "player_team"
                }

            ]).then(function (answer) {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "What player are you trying to increase wins for?",
                            choices: function () {
                                var choiceArray = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].team_name === answer.player_team) {
                                        choiceArray.push(res[i].playerlast_name);
                                    }
                                }
                                return choiceArray;
                            },

                            name: "playerlast_name"
                        },
                        {
                            type: "number",
                            message: "How many loses do you want to add? Use negative numbers to subtract wins",
                            name: "loses"
                        }
                    ]).then(function (answer) {
                        var chosenItem;
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].playerlast_name === answer.playerlast_name) {
                                chosenItem = res[i];
                            }
                        }
                        connection.query(
                            "UPDATE players SET ? WHERE ?",
                            [
                                {
                                    num_loses: chosenItem.num_loses + parseInt(answer.loses)
                                },
                                {
                                    playerlast_name: answer.playerlast_name
                                }
                            ],
                            function (error) {
                                if (error) throw err;
                                console.log('\n\n')
                                console.log(chosenItem.playerlast_name + "'s loses are now updated")
                                console.log('\n\n')
                                questions()
                            }

                        );

                    })
            })
    })
}

function addPlayer() {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the players first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the players last name?"
            },
            {
                name: "wins",
                type: "number",
                message: "Number of wins"
            },
            {
                name: "loses",
                type: "number",
                message: "Number of loses"
            },
            {
                name: "players_team",
                type: "input",
                message: "Name of player's team"
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO players SET ?",
                {
                    playerfirst_name: answer.first_name,
                    playerlast_name: answer.last_name,
                    num_wins: answer.wins || 0,
                    num_loses: answer.loses || 0,
                    team_name: answer.players_team
                },
                function (err) {
                    if (err) throw err;
                    console.log('\n\n')
                    console.log("Player was added successfully!");
                    console.log('\n\n')
                    // re-prompt the user for if they want to bid or post
                    questions();
                }
            );
        });
}

function deletePlayer() {
    var query = "SELECT * FROM players";
    connection.query(query, function (err, res) {
        if (err) console.log(err);
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What team does the player play for?",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].team_name);
                        }
                        return choiceArray;
                    },
                    name: "player_team"
                }

            ]).then(function (answer) {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "What player are you trying to delete?",
                            choices: function () {
                                var choiceArray = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].team_name === answer.player_team) {
                                        choiceArray.push(res[i].playerlast_name);
                                    }
                                }
                                return choiceArray;
                            },

                            name: "playerlast_name"
                        }
                    ]).then(function (answer) {
                        
                        
                        connection.query(
                            "DELETE FROM players WHERE ?",
                            {
                                playerlast_name: answer.playerlast_name
                            },
                            function (err) {
                                if (err) console.log(err);
                                console.log('\n\n')
                                console.log("Player was deleted successfully!");
                                console.log('\n\n')
                                questions()
                            }

                        );

                    })
            })
    })
}

function exit() {
    connection.end()
}

