const detailsSpec = {

    "name": {
        props: {
            "type": "text",
            "name": "name",
            "label": "Name",
            "placeholder": "Enter name...",
            "defaultValue": ""
        },
        validation: {
            required: true
        },
    },
    "gender": {
        props: {
            "type": "select",
            "name": "gender",
            "label": "Gender",
            "placeholder": "Enter gender...",
            "defaultValue": "male",
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
        validation: {
            required: true
        },
    },
    "age": {
        props: {
            "type": "number",
            "name": "age",
            "label": "Age",
            "placeholder": "Enter age...",
            "min": 0,
            "defaultValue": 0

        },
        validation: {
            required: true
        },
    },
    "referredBy": {
        props: {
            "type": "text",
            "name": "referredBy",
            "label": "Referred By",
            "placeholder": "Enter referred by...",
            "defaultValue": ""
        },
        validation: {
            required: true
        },
    }
}

export default detailsSpec;