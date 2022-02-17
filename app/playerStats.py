from app.matches import Matches
import json

class playerStats:

    def getTotalWins(id):
        allMatches = json.loads(Matches.getMatchesWithPlayer(id))
        wins = 0
        for match in allMatches:
            if int(id) in match["winners"]:
                wins += 1
        return str(wins) + " wins"

