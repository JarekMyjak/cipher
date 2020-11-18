import React from 'react'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid'

const InputOutput = ({ encryptFunction, decryptFunction}) => {

    const [input, setInput] = React.useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const [output, setOutput] = React.useState('');

    const handleOutputChange = (event) => {
        setOutput(event.target.value);
    };

    const handleEncrypt = (e) => {
        setOutput(encryptFunction(input));
    }

    const handleDecrypt = (e) => {
        setInput(decryptFunction(output));
    }
    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item ><TextField
                    id="outlined-multiline-static"
                    label="Input"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={handleInputChange}
                    value={input}
                /></Grid>
                

                <Grid item ><ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical outlined primary button group"
                >
                    <Button
                        onClick={handleEncrypt}
                    ><ChevronRightIcon /></Button>
                    <Button
                        onClick={handleDecrypt}
                    ><ChevronLeftIcon /></Button>
                </ButtonGroup></Grid>


                <Grid item ><TextField
                    id="outlined-multiline-static"
                    label="Output"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={handleOutputChange}
                    value={output}
                /></Grid>
            </Grid>
        </>
    )
}

export default InputOutput