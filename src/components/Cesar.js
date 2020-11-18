import React, { useState } from 'react'
import InputOutput from './InputOutput';




export const Cesar = () => {
    const [charSet, setCharSet] = useState(
        [
            'a',
            'ą',
            'b',
            'c',
            'ć',
            'd',
            'e',
            'ę',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'ł',
            'm',
            'n',
            'ń',
            'o',
            'ó',
            'p',
            'q',
            'r',
            's',
            'ś',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
            'ź',
            'ż',
        ])


    const encrypt = (sentence) => {
        return sentence
    }

    const decrypt = (sentence) => {
        return sentence
    }

    return (
        <>
            <InputOutput encryptFunction={ encrypt } decryptFunction={ decrypt }></InputOutput>

        </>
    )
}
