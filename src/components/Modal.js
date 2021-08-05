import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function SimpleModal() {
    return (
        <Modal
            trigger={<Button type="button" icon="info" />}
            header='Reminder!'
            content='Patient report'
        />
    )
}

export default SimpleModal
