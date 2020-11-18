import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

export const Navi = () => {

    const [value, setValue] = React.useState(0);

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                
            >
                <BottomNavigationAction label="Recents" icon={"c"} />
                <BottomNavigationAction label="Favorites" icon={"a"} />
                <BottomNavigationAction label="Nearby" icon={'a'} />
            </BottomNavigation>
        </div>
    )
}
