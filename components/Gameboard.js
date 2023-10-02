import { useState, useEffect } from "react";
import { Text, View, Pressable, SafeAreaView, } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import style from "../style/style";


let board = []
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 5;
const WINNING_POINTS = 23;
export default function Gameboard() {
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [nbrOfWins, setNbrOfWins] = useState(0);
    const [sum, setSum] = useState(0);
    const [status, setStatus] = useState('');

    const throwDices = () => {
        let sum = 0;
        for (let i = 0; i < NBR_OF_DICES; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1);
            board[i] = 'dice-' + randomNumber;
            sum += randomNumber;
        }
        setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
        setSum(sum);
    }


    useEffect(() => {
        checkWinner();
        if (nbrOfThrowsLeft === NBR_OF_THROWS) {
            setStatus('YOU ARE TOO FAST, GAME IS NOT STARTED YET');
        }
        if (nbrOfThrowsLeft < 0) {
            setNbrOfThrowsLeft(NBR_OF_THROWS - 1);
            setNbrOfWins(0);
        }
    }, [nbrOfThrowsLeft]);



    const checkWinner = () => {
        if (sum >= WINNING_POINTS && nbrOfThrowsLeft > 0) {
            setNbrOfWins(nbrOfWins + 1);
            setStatus('CONGRATS! YOU WON');
        }
        else if (sum >= WINNING_POINTS && nbrOfThrowsLeft === 0) {
            setNbrOfWins(nbrOfWins + 1);
            setStatus('YOU WON,  SO THE GAME IS OVER');
        }
        else if (nbrOfWins > 0 && nbrOfThrowsLeft === 0) {
            setStatus('YOU WON BRO! GAME OVER');
        } else if (nbrOfThrowsLeft === 0) {
            setStatus('THE GAME IS OVER NOW');
        }
        else {
            setStatus('KEEP ON THROWING BRO ');
        }
    }


    const row = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
        row.push(
            <MaterialCommunityIcons
                name={board[i]}
                key={"row" + i}
                size={50}
                color={"#2f3d53"}>
            </MaterialCommunityIcons>
        );
    }

    return (
        <SafeAreaView>
            <View style={style.gameboard}>
                <View style={style.flex}>{row}</View>
                <Text style={style.gameinfo}>SUM OF THE MOVES {sum}</Text>
                <Text style={style.gameinfo}>THROWS LEFT {nbrOfThrowsLeft}</Text>
                <Text style={style.gameinfo}>NUMBER OF WINS {nbrOfWins}</Text>
            </View>
            <View>
                <Pressable style={style.button}
                    onPress={() => throwDices()}>
                    <Text style={style.buttonText} >
                        THROW DICES
                    </Text>
                </Pressable>
            </View>
            <View><Text style={style.status}>{status}</Text></View>
        </SafeAreaView>
    )
}