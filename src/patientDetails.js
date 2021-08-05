const details = {
    "name": {
        "type": "text",
        "name": "name",
        "label": "Name",
        "placeholder": "Enter name...",
        "required": true
    },
    "gender": {
        "type": "select",
        "name": "gender",
        "label": "Gender",
        "placeholder": "Enter gender...",
        "required": true,
        "options": [
            {
                "key": "m",
                "text": "Male",
                "value": "male"
            },
            {
                "key": "f",
                "text": "Female",
                "value": "female"
            },
            {
                "key": "o",
                "text": "Other",
                "value": "other"
            }
        ]
    },
    "age": {
        "type": "number",
        "name": "age",
        "label": "Age",
        "placeholder": "Enter age...",
        "required": true,
        "min": 0
    },
    "referredBy": {
        "type": "text",
        "name": "referredBy",
        "label": "Referred By",
        "placeholder": "Enter referred by...",
        "required": true
    }
}

export default details;