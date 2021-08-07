const testSpec = {
    "name": {
        props: {
            "type": "text",
            "name": "name",
            "label": "Name",
            "placeholder": "Enter name...",

        },
        validation: {
            "required": true
        }
    },
    "observationTime": {
        props: {
            "type": "time",
            "name": "observationTime",
            "label": "Observation Time",
            "placeholder": "Enter observation time...",

        },
        validation: {
            "required": true
        }
    },
    "value": {
        props: {
            "type": "text",
            "name": "value",
            "label": "Value",
            "placeholder": "Enter value...",
        },
        validation: {
            "required": true,
            "valueAsNumber": true
        }
    },
    "unit": {
        props: {
            "type": "select",
            "name": "unit",
            "label": "Unit",
            "placeholder": "Enter unit...",
            "options": [
                {
                    "key": "0",
                    "text": "mg/L",
                    "value": "mgL"
                },
                {
                    "key": "1",
                    "text": "kg/L",
                    "value": "kgL"
                }
            ]
        },
        validation: {
            "required": true
        }
    },
    "method": {
        props: {
            "type": "text",
            "name": "method",
            "label": "Method",
            "placeholder": "Enter method...",
        },
        validation: {
            "required": true
        }
    },
    "impression": {
        props: {
            "type": "text",
            "name": "impression",
            "label": "Impression",
            "placeholder": "Enter impression...",
        },
        validation: {
            "required": true
        }
    }
}


export default testSpec;