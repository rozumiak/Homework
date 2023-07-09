import {useState} from "react";

export const useFormField = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const [meta, setMeta] = useState(true);

    const onChange = (event) => {
        const value = event.target.value;
        console.log(value);
        if (value.length > 3) {
            setMeta(false)
        } else {
            setMeta(true)
        }
        setValue(value);
    }
    return {
        value,
        meta,
        onChange
    }

}
