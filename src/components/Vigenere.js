import React, { useState }from 'react'
import InputOutput from './InputOutput';
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core';





export const Vigenere = () => {
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

    const handleSecretChange = (e) => {
        setSecret(e.target.value);
    }

    const charToOffset = (char, set) => set.findIndex((c) => c === char)

    const prepString = (str) => {
        return str.replace(/ /g, '').toLowerCase()
    }
    
    const encrypt = (sentence) => {
        let tmp = [...prepString(sentence)]
        let key = [...secret]
        const ret = tmp.map((char,i) => {
            let mi = charToOffset(char, charSet)
            let ki = charToOffset(key[i%key.length],charSet)
            return charSet[(mi + ki + charSet.length) % charSet.length]
        })
        return ret.join('').toString()
    }
    
    const decrypt = (sentence) => {
        let tmp = [...prepString(sentence)]
        let key = [...secret]
        const ret = tmp.map((char,i) => {
            let ci = charToOffset(char, charSet)
            let ki = charToOffset(key[i%key.length],charSet)
            return charSet[(ci - ki + charSet.length) % charSet.length]
        })
        return ret.join('').toString()
    }

    return (
        <>
            <br/><Typography variant="h3" component="h3">Vigenere</Typography><br/>
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
