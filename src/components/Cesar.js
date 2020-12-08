import React, { useState } from 'react'
import InputOutput from './InputOutput';
import Typography from '@material-ui/core/Typography'



export const Cesar = () => {
    const [offset, setOffset] = useState(5)
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

    const prepString = (str) => {
        return str.replace(/ /g, '').toLowerCase()
    }

    const encrypt = (sentence) => {
        const tmp = [...prepString(sentence)]
        console.log(tmp)
        const ret = tmp.map((char) => {

            let i = charSet.findIndex((c) => c === char)

            return charSet[(i + charSet.length + offset) % charSet.length]
        })

        return ret.join('').toString()
    }

    const decrypt = (sentence) => {
        const tmp = [...prepString(sentence)]
        const ret = tmp.map((char) => {

            let i = charSet.findIndex((c) => c === char)

            return charSet[(i + charSet.length - offset) % charSet.length]
        })

        return ret.join('')
    }

    return (
        <>
            <br/><Typography variant="h3" component="h3">Ceasar</Typography><br/>
            <InputOutput encryptFunction={encrypt} decryptFunction={decrypt}></InputOutput>

        </>
    )
}
