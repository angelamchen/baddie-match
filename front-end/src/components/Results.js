import { useContext, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { AppContext } from "../Contexts/AppContext";
import { MatchUrl } from "../API/API"

const ResultsPage = () => {
    // const [results, setResults] = useState({});
    const { players, matches, queryPlayerResults } = useContext(AppContext)
    // const [selectedPlayer, setSelectedPlayer] = useState()
    // const [matches, setMatches] = useState([])

   /*  function getResults(id) {
        queryPlayerResults(selectedPlayer.id).then(data => setMatches(data))
    } */

    // TODO: someone with Reaact experience pls do this better
    function formatPlayerSingles(match, index) {
        let winner = match.winners[0]
        let player = players.find(x => x.id === match.players[index]).first_name

        if (winner === match.players[index]) {
            return (<b>{player}</b>)
        }
        return player
    }

    function formatPlayerDoubles(match, index1, index2) {
        let player1 = players.find(x => x.id === match.players[index1]).first_name
        let player2 = players.find(x => x.id === match.players[index2]).first_name

        let playerString = player1 + '/' + player2

        if (match.winners.includes(match.players[index1])) {
            return (<b>{playerString}</b>)
        }
        return playerString
    }


    function formatPlayers(match) {
        if (match.event === 'Singles') {
            return (
                <p>{formatPlayerSingles(match, 0)} vs. {formatPlayerSingles(match, 1)}</p>
            )
        } else {
            return (
                <p>{formatPlayerDoubles(match, 0, 1)} vs. {formatPlayerDoubles(match, 2, 3)}</p>
            )
        }
        
    }

    function formatScores(scores) {
        let scoreString = ''
        for (let i = 0; i < scores.length; i++) {
            if (i % 2 === 0) {
                if (scores[i] == 0) return scoreString
                scoreString += scores[i] + '-'
            } else {
                scoreString += scores[i] + '   '
            }
        }
        return scoreString;
    }

    return (
        <>
            <Container>
                <Row >
                    <Col className='page-title'>
                        RESULTS
                    </Col>
                </Row>
                { matches.length == 0 || players.length == 0 ? (
                    /* if no matches yet or if there are matches but no players */
                    <Col className='page-title'>
                        Retreiving data, please be patient...
                    </Col>
                ) : (
                    <>
                        {/* <Row>
                            <Col className='page-header'>
                                Pick a player for results
                            </Col>
                        </Row>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Select type='select' /*onChange={(e) => getResults(e)*}>

                                        <option>Choose a player</option>
                                        {players && players.map((p, i) => <option key={i} value={p.first_name + " " + p.last_name}>{p.first_name} {p.last_name}</option>)}

                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form> */}
                        <hr></hr> 
                        {matches.map((match, i) => {
                            return (
                                <div key={i}>
                                    <Row>
                                        <Col xs={6}>{formatPlayers(match)}</Col>
                                        <Col xs={6}>{formatScores(match.score)}</Col>
                                    </Row>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </>
                )}
            </Container>
        </>
    )
}

export default ResultsPage;