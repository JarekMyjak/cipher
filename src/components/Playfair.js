import React, { useState }from 'react'
import InputOutput from './InputOutput';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

export const Playfair = () => {
    const [secret, setSecret] = useState('')
    const [charSet, setCharSet] = useState(
        [
            'a', 'ą', 'b', 'c', 'ć',
            'd', 'e', 'ę', 'f', 'g',
            'h', 'i', 'j', 'k', 'l',
            'ł', 'm', 'n', 'ń', 'o',
            'ó', 'p', 'q', 'r', 's',
            'ś', 't', 'u', 'v', 'w',
            'x', 'y', 'z', 'ź', 'ż',
        ])

    const [table, settable] = useState(charSet)

    const handleSecretChange = (e) => {
        setSecret(e.target.value);
        //makeTable(e.target.value)
        settable(makeTable(e.target.value))
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    const makeTable = (key) => {
        return [...key,...charSet].filter(onlyUnique)
    }

    const charToOffset = (char, set) => set.findIndex((c) => c === char)

    const prepString = (str) => {
        return str.replace(/ /g, '').toLowerCase()
    }
    
    const encrypt = (sentence) => {
        let sen = [...prepString(sentence)]
        let ret = ''
        for (let i = 0; i < sen.length; i+=2) {
            let el1 = sen[i];
            let el2 = (i+1 === sen.length ? 'x' : sen[i+1]);

            if (el1 === el2) { el2 = 'x'}

            const i1 = charToOffset(el1,table)
            const i2 = charToOffset(el2,table)
            const r1 = Math.floor(i1/5)
            const r2 = Math.floor(i2/5)
            const c1 = i1%5
            const c2 = i2%5
            if (r1===r2) {
                //same row
                ret+=table[(r1*5)+((c1+1)%5)]
                ret+=table[(r2*5)+((c2+1)%5)]
            } else if (c1===c2) {
                //same column
                ret+=table[(((r1+1)%7)*5)+((c1)%5)%35]
                ret+=table[(((r2+1)%7)*5)+((c2)%5)%35]
            }else {
                //square
                ret+=table[((r1)*5)+((c2)%5)]
                ret+=table[((r2)*5)+((c1)%5)]
            }
        }
        return ret
    }
    
    const decrypt = (sentence) => {
        let sen = [...prepString(sentence)]
        let ret = ''
        for (let i = 0; i < sen.length; i+=2) {
            let el1 = sen[i];
            let el2 = (i+1 == sen.length ? 'x' : sen[i+1]);

            if (el1 === el2) { el2 = 'x'}
            
            const i1 = charToOffset(el1,table)
            const i2 = charToOffset(el2,table)
            const r1 = Math.floor(i1/5)
            const r2 = Math.floor(i2/5)
            const c1 = i1%5
            const c2 = i2%5
            
            if (r1===r2) {
                //same row
                ret+=table[(r1*5)+((c1+4)%5)]
                ret+=table[(r2*5)+((c2+4)%5)]
            } else if (c1===c2) {
                //same column
                ret+=table[(((r1+6)%7)*5)+((c1)%5)]
                ret+=table[(((r2+6)%7)*5)+((c2)%5)]
            }else {
                //square
                ret+=table[((r1)*5)+((c2)%5)]
                ret+=table[((r2)*5)+((c1)%5)]
            }
        }
        return ret
    }

    return (
        <>
            <br/><Typography variant="h3" component="h3">Playfair</Typography><br/>
            <InputOutput encryptFunction={encrypt} decryptFunction={decrypt}></InputOutput>
            <br/>
            <TextField
                    id="outlined-multiline-static"
                    label="Secret word"
                    variant="outlined"
                    onChange={handleSecretChange}
                    value={secret}
                />
        </>
    )
}
