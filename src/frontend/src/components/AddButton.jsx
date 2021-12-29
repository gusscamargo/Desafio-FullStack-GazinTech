import React from 'react'
import { Button, Icon } from 'react-materialize'
import { Link, useLocation } from 'react-router-dom'

export default function AddButton() {
    const {pathname} = useLocation()
    return (
        <Link to={`${pathname}/create`}>
            <Button
                className="blue"
                floating
                icon={<Icon>add</Icon>}
                large
                node="button"
                waves="light"
                fab
            />
        </Link>
    )
}
