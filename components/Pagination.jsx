import React from 'react'
import './Pagination.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { ChevronRight, ChevronLeft, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material'


function Pagination({name,offset,setOffset}) {
    return (
        <div
            className="page-container"
        >
            <div
                className="page-container-text"
            >
                <span>
                    {name}
                </span>
            </div>
            <div>
                <Button
                    variant="text"
                    className="page-btns"
                    onClick={() => {setOffset(offset - 1)}}
                >
                    <ChevronLeft 
                        sx={{color: 'teal'}}
                        fontSize='large'
                        />
                </Button>
                <Button
                    variant="text"
                    className="page-btns"
                    onClick={() => {setOffset(offset + 1)}}
                >
                    <ChevronRight 
                        sx={{color: 'teal'}}
                        fontSize='large'
                    />
                </Button>
            </div>
        </div>
    )
}

export default Pagination
