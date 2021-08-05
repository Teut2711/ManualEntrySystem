const tests = {
    "name": {
        "type": "text",
        "name": "name",
        "label": "Name",
        "placeholder": "Enter name...",
        "required": true
    },
    "observationTime": {
        "type": "time",
        "name": "observationTime",
        "label": "Observation Time",
        "placeholder": "Enter observation time...",
        "required": true

    },
    "value": {
        "type": "text",
        "name": "value",
        "label": "Value",
        "placeholder": "Enter value...",
        "required": true
    },
    "unit": {
        "type": "select",
        "name": "unit",
        "label": "Unit",
        "placeholder": "Enter unit...",
        "required": true,
        "options": [
            {
                "key": "0",
                "text": "mg/L",
                "value": "mgL"
            }
            ,
            {
                "key": "1",
                "text": "kg/L",
                "value": "kgL"
            }
        ]
    },
    "method": {
        "type": "text",
        "name": "method",
        "label": "Method",
        "placeholder": "Enter method...",
        "required": true
    },
    "impression": {
        "type": "text",
        "name": "impression",
        "label": "Impression",
        "placeholder": "Enter impression...",
        "required": true

    }
}


export default tests;