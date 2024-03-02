import * as React from 'react';
import Button from './Button';
import { View, Text } from 'react-native';
import { Colors } from '../styles/Colors';
import { Styles } from '../styles/GlobalStyles';

export default function Keyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    }

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    }

    const clear = () => {
        setOperation("");
        setFirstNumber("");
        setSecondNumber("");
        setResult(null);
    }

    const calcuateResult = () => {
        switch (operation) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    }

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, { color: Colors.black }] : [Styles.screenFirstNumber, { fontSize: 50, color: Colors.black }]}>
                {result?.toString()}
            </Text>
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
        }
        if (firstNumber === "") {
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>{firstNumber}</Text>
            )
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            )
        }        
    }

    return (
        <View style={Styles.viewBottom}>
            <View style={{ height: 120, width: "90%", justifyContent: "flex-end", alignSelf: "center" }}>
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
             <View style={Styles.row}>
                <Button title='C' isGray onPress={clear} />
                <Button title='+/-' isGray onPress={() => handleOperationPress("+/-")} />
                <Button title='%' isGray onPress={() => handleOperationPress("%")} />
                <Button title='+' isBlue onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title='7' isGray onPress={() => handleNumberPress("7")} />
                <Button title='8' isGray onPress={() => handleNumberPress("8")} />
                <Button title='9' isGray onPress={() => handleNumberPress("9")} />
                <Button title='x' isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <Button title='4' isGray onPress={() => handleNumberPress("4")} />
                <Button title='5' isGray onPress={() => handleNumberPress("5")} />
                <Button title='6' isGray onPress={() => handleNumberPress("6")} />
                <Button title='-' isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Button title='1' isGray onPress={() => handleNumberPress("1")} />
                <Button title='2' isGray onPress={() => handleNumberPress("2")} />
                <Button title='3' isGray onPress={() => handleNumberPress("3")} />
                <Button title='+' isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
                <Button title='.' isGray onPress={() => handleNumberPress(".")} />
                <Button title='0' isGray onPress={() => handleNumberPress("0")} />
                <Button title='<=' isGray onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title='=' isBlue onPress={() => calcuateResult()} />
            </View>
        </View>
    )
}