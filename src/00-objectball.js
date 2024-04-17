function gameObject(){
    let home = {
        teamName: "Brooklyn Nets",
        colors: ['Black', 'White'],
        players:[
            {name: "Alan Anderson", number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamdunks:1},
            {name: "Reggie Evans", number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamdunks:7},
            {name: "Brook Lopez", number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamdunks:15},
            {name: "Mason Plumlee", number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamdunks:5},
            {name: "Jason Terry", number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamdunks:1},
        ]
    }

    let away ={
        teamName: "Charlotte Hornets",
        colors: ['Purple', 'Turqoise'],
        players:[
            {name: "Jeff Adrien", number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamdunks:2},
            {name: "Bismak Biyombo", number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamdunks:10},
            {name: "Desagna Diop", number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamdunks:1},
            {name: "Ben Gordon", number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamdunks:1},
            {name: "Brendah Haywood", number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamdunks:1},
        ]
    }
    
    return {
        home,away
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    
    // Check home team players
    let player = game.home.getPlayerByName(playerName);
    if (player) {
        return player.points;
    }

    // Check away team players
    player = game.away.getPlayerByName(playerName);
    if (player) {
        return player.points;
    }

    // If player not found
    return `${playerName} is not a valid player.`;
}


function shoeSize(playerName) {
    const game = gameObject();
    
    // Check home team players
    let player = game.home.getPlayerByName(playerName);
    if (player) {
        return player.shoe;
    }

    // Check away team players
    player = game.away.getPlayerByName(playerName);
    if (player) {
        return player.shoe;
    }

    // If player not found
    return `${playerName} is not a valid player.`;
}

function teamColors(teamName) {
    const game = gameObject();
    
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return `${teamName} is not a valid team.`;
    }
}

function teamNames() {
    const game = gameObject();
    
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    let team;

    if (game.home.teamName === teamName) {
        team = game.home;
    } else if (game.away.teamName === teamName) {
        team = game.away;
    } else {
        return `${teamName} is not a valid team.`;
    }

    return team.players.map(player => player.number);
}


function playerStats(playerName) {
    const game = gameObject();
    
    // Search for the player in home team
    let player = game.home.players.find(player => player.name === playerName);
    
    // If not found in home team, search in away team
    if (!player) {
        player = game.away.players.find(player => player.name === playerName);
    }

    // If player found, return their stats; otherwise, return a message
    if (player) {
        return {
            name: player.name,
            number: player.number,
            shoe: player.shoe,
            points: player.points,
            rebounds: player.rebounds,
            assists: player.assists,
            steals: player.steals,
            blocks: player.blocks,
            slamdunks: player.slamdunks
        };
    } else {
        return `${playerName} is not a valid player.`;
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    
    // Combine all players into one array
    const allPlayers = [...game.home.players, ...game.away.players];

    // Find player with the largest shoe size
    const playerWithLargestShoe = allPlayers.reduce((prevPlayer, currentPlayer) => {
        return (currentPlayer.shoe > prevPlayer.shoe) ? currentPlayer : prevPlayer;
    });

    // Return the number of rebounds of the player with the largest shoe size
    return playerWithLargestShoe.rebounds;
}

function mostPointsScored() {
    const game = gameObject();

    // Combine all players into one array
    const allPlayers = [...game.home.players, ...game.away.players];

    // Find player with the most points
    const playerWithMostPoints = allPlayers.reduce((prevPlayer, currentPlayer) => {
        return (currentPlayer.points > prevPlayer.points) ? currentPlayer : prevPlayer;
    });

    return playerWithMostPoints.name;
}

function winningTeam() {
    const game = gameObject();

    // Calculate total points for each team
    const homePoints = game.home.players.reduce((total, player) => total + player.points, 0);
    const awayPoints = game.away.players.reduce((total, player) => total + player.points, 0);

    // Determine the winning team
    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName() {
    const game = gameObject();

    // Combine all players into one array
    const allPlayers = [...game.home.players, ...game.away.players];

    // Find player with the longest name
    const playerWithLongestName = allPlayers.reduce((prevPlayer, currentPlayer) => {
        return (currentPlayer.name.length > prevPlayer.name.length) ? currentPlayer : prevPlayer;
    });

    return playerWithLongestName.name;
}

function doesLongNameStealATon() {
    const game = gameObject();

    // Combine all players into one array
    const allPlayers = [...game.home.players, ...game.away.players];

    // Find player with the longest name
    const playerWithLongestName = allPlayers.reduce((prevPlayer, currentPlayer) => {
        return (currentPlayer.name.length > prevPlayer.name.length) ? currentPlayer : prevPlayer;
    });

    // Find player with the most steals
    const playerWithMostSteals = allPlayers.reduce((prevPlayer, currentPlayer) => {
        return (currentPlayer.steals > prevPlayer.steals) ? currentPlayer : prevPlayer;
    });

    // Check if the player with the longest name had the most steals
    return playerWithLongestName.name === playerWithMostSteals.name;
}

console.log(doesLongNameStealATon());

